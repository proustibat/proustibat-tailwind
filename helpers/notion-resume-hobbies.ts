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

type PageObjectResponseHobbies = (PageObjectResponse & {
  properties: {
    Name: {
      rich_text: TextRichTextItemResponse[];
    };
    Slug: DatabaseObjectResponse;
  };
})[];

export const getHobbies = async () => {
  if (!process.env.DATABASE_ID_RESUME_HOBBIES) {
    return;
  }
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID_RESUME_HOBBIES,
  });

  const results = response.results as PageObjectResponseHobbies;

  const hobbies = results.map((result) => ({
    name: result.properties.Name.rich_text[0].plain_text,
    slug: result.properties.Slug.title[0].plain_text,
  }));

  return hobbies;
};
