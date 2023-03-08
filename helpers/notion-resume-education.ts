import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type PageObjectResponseEducation = (PageObjectResponse & {
  properties: {
    Location: {
      rich_text: TextRichTextItemResponse[];
    };
    Slug: {
      rich_text: TextRichTextItemResponse[];
    };
    Degree: DatabaseObjectResponse;
  };
})[];

export const getEducation = async () => {
  if (!process.env.DATABASE_ID_RESUME_EDUCATION) {
    return;
  }
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID_RESUME_EDUCATION,
    sorts: [
      {
        property: 'Order',
        direction: 'ascending',
      },
    ],
  });

  const results = response.results as PageObjectResponseEducation;

  const education = results.map((result) => ({
    slug: result.properties.Slug.rich_text[0].plain_text,
    location: result.properties.Location.rich_text[0].plain_text,
    degree: result.properties.Degree.title[0].plain_text,
  }));

  return education;
};
