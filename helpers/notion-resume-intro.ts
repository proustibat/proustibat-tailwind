import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  EmailPropertyItemObjectResponse,
  GetPageResponse,
  PageObjectResponse,
  PhoneNumberPropertyItemObjectResponse,
  QueryDatabaseResponse,
  RelationPropertyItemObjectResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
type IntroProperties = {
  Links: RelationPropertyItemObjectResponse;
  Phone: PhoneNumberPropertyItemObjectResponse;
  Presentation: {
    rich_text: TextRichTextItemResponse[];
  };
  Job: {
    rich_text: TextRichTextItemResponse[];
  };
  Email: EmailPropertyItemObjectResponse;
  Fullname: DatabaseObjectResponse;
};

type PageObjectResponseIntro = (PageObjectResponse & {
  properties: unknown;
})[];

export const getIntro = async () => {
  if (!process.env.DATABASE_ID_RESUME_INTRO) {
    return;
  }
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID_RESUME_INTRO,
  });

  const results = response.results as PageObjectResponseIntro;

  const properties = await getPropertiesFromIntro(results);

  return properties;
};

const getPropertiesFromIntro = async (results: PageObjectResponseIntro) => {
  const properties = results[0].properties as unknown as IntroProperties;

  const { Fullname, Email, Phone, Presentation, Links, Job } = properties;

  const links = await getLinksData(Links);

  return {
    fullName: Fullname.title[0].plain_text,
    email: Email.email,
    phone: Phone.phone_number,
    presentation: Presentation.rich_text[0].plain_text,
    job: Job.rich_text[0].plain_text,
    links,
  };
};

const getLinksData = async (Links: RelationPropertyItemObjectResponse) => {
  if (!process.env.DATABASE_ID_LINKS) {
    return;
  }
  const results = await Promise.all(
    Links.relation
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .map((relation) => relation.id)
      .map((id: string) =>
        notion.pages.retrieve({
          page_id: id,
        })
      )
  );
  return results.map(
    (
      result: GetPageResponse & {
        properties: {
          Name: { title: { plain_text: string }[] };
          Link: { url: string };
        };
      }
    ) => ({
      text: result.properties.Name.title[0].plain_text,
      url: result.properties.Link.url,
    })
  );
};
