import connectMongoDB from '@/libs/mongoose';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.create({ title, description });
  return NextResponse.json({
    message: 'Topic Created!',
  });
}

export async function GET(request) {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({
    topics,
  });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json(
    {
      message: 'Topic delete',
    },
    { status: 200 }
  );
}
