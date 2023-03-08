import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  GetPageResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
  RelationPropertyItemObjectResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
type WorkHistoryProperties = {
  Slug: DatabaseObjectResponse;
  Company: RelationPropertyItemObjectResponse;
  Duration: {
    rich_text: TextRichTextItemResponse[];
  };
  Position: {
    rich_text: TextRichTextItemResponse[];
  };
  Location: {
    rich_text: TextRichTextItemResponse[];
  };
  Responsibilities: {
    rich_text: TextRichTextItemResponse[];
  };
  Skills: RelationPropertyItemObjectResponse;
  Missions: RelationPropertyItemObjectResponse;
};
type PageObjectResponseWorkHistory = (PageObjectResponse & {
  properties: unknown;
})[];
type PropertyMission = {
  Company: RelationPropertyItemObjectResponse;
  Responsibilities: { rich_text: { plain_text: string }[] };
  Skills: RelationPropertyItemObjectResponse;
  Slug: { title: { plain_text: string }[] };
};
type PropertiesListMission = (GetPageResponse & {
  properties: PropertyMission;
})[];

export const getWorkHistory = async () => {
  if (!process.env.DATABASE_ID_RESUME_WORK_HISTORY) {
    return;
  }
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID_RESUME_WORK_HISTORY,
    sorts: [
      {
        property: 'Order',
        direction: 'ascending',
      },
    ],
  });

  const results = (response.results as PageObjectResponseWorkHistory).map(
    (result) => result.properties as unknown as WorkHistoryProperties
  );

  const properties = await Promise.all(
    results.map((item) => getPropertiesForWorkExperience(item))
  );

  return properties;
};

const getPropertiesForWorkExperience = async ({
  Responsibilities,
  Company,
  Skills,
  Position,
  Duration,
  Missions,
  Location,
  Slug,
}: WorkHistoryProperties) => {
  const company = await getCompanyInformation(Company);

  const position = Position.rich_text[0].plain_text;

  const duration = Duration.rich_text[0].plain_text;

  const location = Location.rich_text[0].plain_text;

  const responsibilities =
    Responsibilities.rich_text && Responsibilities.rich_text[0]
      ? Responsibilities.rich_text[0].plain_text
      : null;

  const skills = await getSkillsList(Skills);

  const missions = await getMissionsList(Missions);

  const slug = Slug.title[0].plain_text;

  return {
    company,
    position,
    location,
    responsibilities,
    skills,
    missions,
    slug,
    duration,
  };
};

const getCompanyInformation = async (
  data: RelationPropertyItemObjectResponse
) => {
  const company = await notion.pages.retrieve({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    page_id: data.relation[0].id,
  });
  const properties = (
    company as GetPageResponse & {
      properties: {
        Name: { title: { plain_text: string }[] };
        Description: { rich_text: { plain_text: string }[] };
        Slug: { rich_text: { plain_text: string }[] };
      };
    }
  ).properties;

  return {
    name: properties.Name.title[0].plain_text,
    description:
      properties.Description.rich_text && properties.Description.rich_text[0]
        ? properties.Description.rich_text[0].plain_text
        : null,
    slug: properties.Slug.rich_text[0].plain_text,
  };
};

const getSkillsList = async (data: RelationPropertyItemObjectResponse) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const ids = data.relation.map((relation: { id: string }) => relation.id);
  const skills: GetPageResponse[] = await Promise.all(
    ids.map((id: string) =>
      notion.pages.retrieve({
        page_id: id,
      })
    )
  );

  return skills.map((skill) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    name: skill.properties.Name.title[0].plain_text,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    slug: skill.properties.Slug.rich_text[0].plain_text,
  }));
};

const getMissionsList = async (data: RelationPropertyItemObjectResponse) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const relations = data.relation as Array;
  if (relations.length === 0) {
    return null;
  }
  const ids = relations.map((relation: { id: string }) => relation.id);
  const missionsData: GetPageResponse[] = await Promise.all(
    ids.map((id: string) =>
      notion.pages.retrieve({
        page_id: id,
      })
    )
  );

  const properties = (missionsData as PropertiesListMission).map(
    (missionData) => missionData.properties
  );

  const missions = await Promise.all(
    properties.map(buildMissionWithProperties)
  );

  return missions;
};

const buildMissionWithProperties = async (propertiesList: PropertyMission) =>
  new Promise(async (resolve) => {
    const properties = {
      company: await getCompanyMission(
        (propertiesList.Company.relation as unknown as { id: string }[]).map(
          (relation) => relation.id
        )
      ),
      responsibilities:
        propertiesList.Responsibilities &&
        propertiesList.Responsibilities.rich_text &&
        propertiesList.Responsibilities.rich_text.length > 0
          ? propertiesList.Responsibilities.rich_text[0].plain_text
          : null,
      skills: await getSkillsList(propertiesList.Skills),
      slug: propertiesList.Slug.title[0].plain_text,
    };

    resolve(properties);
  });

const getCompanyMission = async (ids: string[]) => {
  const company = await notion.pages.retrieve({
    page_id: ids[0],
  });
  if (!company) return null;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const properties = company.properties;

  return {
    name: properties.Slug.rich_text[0].plain_text,
    description: properties.Description.rich_text[0].plain_text,
    slug: properties.Name.title[0].plain_text,
  };
};
