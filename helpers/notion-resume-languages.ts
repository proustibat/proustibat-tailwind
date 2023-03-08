import { Client } from '@notionhq/client';
import {
  DatabaseObjectResponse,
  PageObjectResponse,
  QueryDatabaseResponse,
  SelectPropertyItemObjectResponse,
  TextRichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type PageObjectResponseLanguages = (PageObjectResponse & {
  properties: {
    Name: {
      rich_text: TextRichTextItemResponse[];
    };
    Slug: DatabaseObjectResponse;
    Level: SelectPropertyItemObjectResponse;
  };
})[];

export const getLanguages = async () => {
  if (!process.env.DATABASE_ID_RESUME_LANGUAGES) {
    return;
  }
  const response: QueryDatabaseResponse = await notion.databases.query({
    database_id: process.env.DATABASE_ID_RESUME_LANGUAGES,
  });

  const results = response.results as PageObjectResponseLanguages;

  const languages = results.map((result) => ({
    name: result.properties.Name.rich_text[0].plain_text,
    slug: result.properties.Slug.title[0].plain_text,
    level: result.properties.Level.select?.name,
  }));

  return languages;
};
