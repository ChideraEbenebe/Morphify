'use server';

import connectDB from '@/db/mongodb';
import { imageModel } from '@/db/schema';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();

    const images = await imageModel.find();

    if (images.length === 0) {
      return NextResponse.json({ result: [] }, { status: 200 });
    }
    return NextResponse.json({ result: images || [] }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        { message: `Error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Unknown server error occurred.' },
      { status: 500 }
    );
  }
}
