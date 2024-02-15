// utils/rssTemplate.js

// types/index.ts

export interface Post {
  title: string;
  slug: string;
  description: string;
  date: string; // or Date for more precise typing
}

export function rssTemplate(posts: Post[]): string {
  return `<?xml version="1.0" ?>
<rss version="2.0">
<channel>
  <title>Your Site Title</title>
  <link>https://www.yoursite.com</link>
  <description>Your site description.</description>
  ${posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>https://www.yoursite.com/posts/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
  `
    )
    .join('')}
</channel>
</rss>`;
}
