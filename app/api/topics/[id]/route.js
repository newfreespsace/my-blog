import connectMongoDB from '@/libs/mongoose';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  console.log('-----', title, description);
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    {
      message: 'Topic updated',
    },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();

  const topic = await Topic.findById(id);
  console.log(topic);
  return NextResponse.json(
    {
      topic,
    },
    {
      status: 200,
    }
  );
}
