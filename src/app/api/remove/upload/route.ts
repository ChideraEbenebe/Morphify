import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectDB from '@/db/mongodb';
import { auth } from '@/auth';
import { imageModel, users } from '@/db/schema';
import { objRemove } from '@/lib/utils';

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: 'Sign In son' }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const object = formData.get('object') as string;
    const title = formData.get('title') as string;

    if (!file) {
      return NextResponse.json(
        { message: 'Please Provide File' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`;

    const result = await cloudinary.v2.uploader.upload(base64Image, {
      folder: 'uploads',
    });

    await connectDB();

    const transformedUrl = await objRemove(result.secure_url, object);

    const storedImage = new imageModel({
      imageUrl: transformedUrl,
      original: result.secure_url,
      prompt: object,
      uploadedBy: session.user?.name,
      uploadedByEmail: session.user?.email,
      edit: 'remove',
      title,
      name: session.user?.name,
    });

    await users.findOneAndUpdate(
      { email: session.user?.email }, // Find the user by email
      {
        $push: {
          image: {
            id: result.public_id,
            title: title || '',
            original: result.secure_url,
            url: transformedUrl,
            uploadedAt: new Date(),
            edit: 'remove',
          },
        },
      },
      { new: true }
    );

    await storedImage.save();

    return NextResponse.json(
      { message: 'Upload Successful', url: transformedUrl, result },
      { status: 200 }
    );
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
