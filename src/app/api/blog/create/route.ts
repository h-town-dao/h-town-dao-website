import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

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

export async function POST(request: Request) {
  try {
    // Strict authentication check
    const authHeader = request.headers.get('authorization');
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken || !authHeader) {
      return NextResponse.json({ error: 'Unauthorized - Token required' }, { status: 401 });
    }

    // Ensure proper Bearer token format and exact match
    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token || token !== adminToken) {
      return NextResponse.json({ error: 'Invalid authentication token' }, { status: 401 });
    }

    // Get request body
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['title', 'slug', 'author', 'date', 'image', 'excerpt', 'content'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Read existing blog posts
    const filePath = path.join(process.cwd(), 'src/data/blog.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    // Check if slug already exists
    if (data.blogPosts.some((post: BlogPost) => post.slug === body.slug)) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
    }

    // Create new blog post
    const newPost: BlogPost = {
      id: `post_${Date.now()}`, // More unique ID generation
      title: body.title,
      slug: body.slug,
      author: body.author,
      date: body.date,
      image: body.image,
      excerpt: body.excerpt,
      content: body.content
    };

    // Add new post to the array
    data.blogPosts.unshift(newPost); // Add to beginning of array

    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 