import { redirect } from 'next/navigation';
import CreateBlogForm from './CreateBlogForm';

export default function CreateBlogPage() {
  const isAdmin = process.env.ADMIN_TOKEN && process.env.ADMIN_TOKEN.length > 0;

  if (!isAdmin) {
    redirect('/blog');
  }

  return <CreateBlogForm />;
} 