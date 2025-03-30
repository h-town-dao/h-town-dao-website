'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { blogPosts } from '@/data/blog';

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="animate-fadeIn text-center py-20">
        <h1 className="text-3xl mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-400 hover:text-blue-300">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-4xl mx-auto py-10">
      <Link href="/blog" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
        ← Back to Blog
      </Link>
      <article>
        <div className="relative  mb-8 rounded-lg overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            width={1200}
            height={600}
          />
        </div>
        <div className="text-gray-400 text-sm mb-8">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ node, ...props }) => (
                <div className="relative h-[400px] my-8">
                  <Image
                    src={props.src || ''}
                    alt={props.alt || ''}
                    width={1200}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost; 