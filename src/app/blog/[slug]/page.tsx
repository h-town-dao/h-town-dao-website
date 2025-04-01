import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import blogData from '@/data/blog.json';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogData.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = blogData.blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="animate-fadeIn pb-20">
      <article className="max-w-4xl mx-auto pt-10">
        <div className="mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={675}
            className="rounded-2xl w-full h-auto"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-400 text-sm mb-8">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <Link href="/blog" className="text-blue-400 hover:text-blue-300">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
} 