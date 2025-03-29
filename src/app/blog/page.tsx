'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, blogPosts } from '@/data/blog';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  return (
    <div className="animate-fadeIn pb-20">
      <div className="flex text-3xl pt-10 justify-center mb-10">Blog</div>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-colors">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
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