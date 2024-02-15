// pages/api/rss.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { rssTemplate } from '../../utils/rssTemplate';

export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string; // or Date for more precise typing
}

// Mock function to fetch your content, replace with actual data fetching logic
async function getYourContent(): Promise<Post[]> {
  // This should be replaced with actual logic to fetch posts
  return [
    {
      title: 'Example Post',
      slug: 'example-post',
      description: 'This is an example post.',
      date: '2022-01-01',
    },
    // more posts...
  ];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const posts = await getYourContent();

  const xml = rssTemplate(posts);

  res.setHeader('Content-Type', 'application/rss+xml');
  res.status(200).end(xml);
}
