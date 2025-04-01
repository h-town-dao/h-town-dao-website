import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  const adminToken = process.env.ADMIN_TOKEN;

  if (!adminToken || !authHeader) {
    return NextResponse.json({ isAdmin: false });
  }

  // Ensure proper Bearer token format and exact match
  const [bearer, token] = authHeader.split(' ');
  if (bearer !== 'Bearer' || !token || token !== adminToken) {
    return NextResponse.json({ isAdmin: false });
  }

  return NextResponse.json({ isAdmin: true });
} 