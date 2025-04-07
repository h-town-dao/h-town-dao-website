'use client';

import { Suspense, useEffect, useState } from 'react';
import BlogPosts from './BlogPosts';
import Link from 'next/link';

const RssIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="#FF6600" // Standard RSS orange
    className="w-6 h-6"
  >
    <path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z" />
    <path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
)

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
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4 pt-10 mb-10">
        <div className="md:col-start-2 flex items-center justify-center gap-2">
          <h1 className="text-3xl">Blog</h1>
          <a 
            href="/api/feed" 
            className="text-gray-400 hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="RSS Feed"
          >
            <RssIcon />
          </a>
        </div>
        {isAdmin && (
          <div className="md:col-start-3 flex justify-center md:justify-end">
            <Link 
              href="/blog/create"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Create Blog Post
            </Link>
          </div>
        )}
      </div>
      <Suspense fallback={<div>Loading posts...</div>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
} 