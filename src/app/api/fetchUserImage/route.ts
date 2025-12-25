'use server';
import { auth } from '@/auth';
import connectDB from '@/db/mongodb';
import { users } from '@/db/schema';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }

  try {
    await connectDB();

    const user = await users.findOne({ email: session.user?.email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ result: user.image || [] }, { status: 200 });
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
