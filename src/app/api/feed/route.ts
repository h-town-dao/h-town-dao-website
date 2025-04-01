import { Feed } from 'feed';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

interface BlogData {
  blogPosts: BlogPost[];
}

const blogData = require('@/data/blog.json') as BlogData;

const baseUrl = "https://htowndao.xyz";

export async function GET() {
  const feed = new Feed({
    title: "H-Town DAO Blog",
    description: "Latest updates and news from H-Town DAO",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    image: `${baseUrl}/h-town-dao.png`,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: "All rights reserved 2024, H-Town DAO",
    updated: new Date(),
    generator: "H-Town DAO RSS Feed",
    feedLinks: {
      rss2: `${baseUrl}/api/feed`,
    },
  });

  // Add posts to feed
  blogData.blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .forEach(post => {
      const imageUrl = post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`;
      feed.addItem({
        title: post.title,
        id: `${baseUrl}/blog/${post.slug}`,
        link: `${baseUrl}/blog/${post.slug}`,
        description: post.excerpt,
        content: post.content,
        author: [{ name: post.author }],
        date: new Date(post.date),
        image: imageUrl,
      });
    });

  // Return the feed
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
} 