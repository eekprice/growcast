import { Client } from '@notionhq/client';
import Constants from 'expo-constants';

const notion = new Client({ auth: Constants.expoConfig.extra.NOTION_KEY });

export async function testNotionConnection() {
  try {
    // Replace with your actual database ID or a page ID you have access to
    const response = await notion.search({ page_size: 1 });
    return response;
  } catch (error) {
    return { error: error.message };
  }
}