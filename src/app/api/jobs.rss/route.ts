import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import RSS from 'rss';
import { job_info } from '../../../data/jobs'; // Adjust the path as necessary

async function getContent(baseUrl: string): Promise<string> {
  const feed = new RSS({
    title: 'Job Postings',
    description: 'Latest job postings',
    feed_url: `${baseUrl}/api/rss`,
    site_url: baseUrl,
  });

  // Loop through the job_info array to add each job posting to the feed
  job_info.forEach((job) => {
    feed.item({
      title: `${job.name} at ${job.company}`,
      description: `Position: ${job.name}\nType: ${job.type}\nLocation: ${job.location}`,
      url: job.link,
      date: job.date,
    });
  });

  return feed.xml({ indent: true });
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const baseUrl = 'https://yourwebsite.com'; // Replace with your actual domain
  const xml = await getContent(baseUrl);

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  });
}
