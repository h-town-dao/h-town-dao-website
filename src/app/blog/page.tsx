'use client';

import { Suspense, useEffect, useState } from 'react';
import BlogPosts from './BlogPosts';
import Link from 'next/link';

export default function Blog() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN;
        if (!token) return;

        const response = await fetch('/api/auth/check-admin', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setIsAdmin(data.isAdmin);
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  return (
    <div className="animate-fadeIn pb-20">
      <div className="flex flex-col items-center gap-4 pt-10 mb-10">
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
        {isAdmin && (
          <Link 
            href="/blog/create"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Blog Post
          </Link>
        )}
      </div>
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
} 