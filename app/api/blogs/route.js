import { NextResponse } from 'next/server';
import connectMongoDB from '@/libs/mongoose';
import Blog from '@/models/blog';

export async function POST(request) {
  const { title, content } = await request.json();
  if (!title || !content)
    return NextResponse.json({
      message: 'create blog failed! must have  title and content!',
    });

  await connectMongoDB();

  await Blog.create({ title, content });

  return NextResponse.json(
    {
      message: 'ok!',
      data: { title, content },
    },
    {
      status: 200,
    }
  );
}
