'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/blog.json';

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

export default function BlogPosts() {
  const [posts] = useState<BlogPost[]>(
    [...(blogData.blogPosts as BlogPost[])].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );

  return (
    <div className="grid gap-8">
      {posts.map((post) => (
        <article key={post.id} className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center rounded-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={600}
                style={{
                  width: 'auto',
                  maxWidth: '100%',
                  height: 'auto'
                }}
                priority
              />
            </div>
            <div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-gray-300">{post.title}</h2>
              </Link>
              <div className="text-gray-400 text-sm mb-4">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-300">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-400 hover:text-blue-300">
                Read more →
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 