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

export async function GET() {
  console.log('收到请求获取所有blog！');
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({
    blogs,
    message: '获取所有 blogs 列表成功！',
  });
}
