'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, blogPosts } from '@/data/blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(
    [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  );

  return (
    <div className="animate-fadeIn pb-20">
      <div className="flex flex-col items-center gap-2 pt-10 mb-10">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl">Blog</h1>
          <a 
            href="/api/feed" 
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS Feed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"/>
            </svg>
          </a>
        </div>
      </div>
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
    </div>
  );
};

export default Blog; 