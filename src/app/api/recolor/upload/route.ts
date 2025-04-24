import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import connectDB from '@/db/mongodb';
import { auth } from '@/auth';
import { imageModel, users } from '@/db/schema';

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

    await connectDB().catch((e) => {
      console.log(e);
    });

    const storedImage = new imageModel({
      imageUrl: result.secure_url,
      uploadedBy: session.user?.name,
      uploadedByEmail: session.user?.email,
      edit: 'recolor',
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
            url: result.secure_url,
            uploadedAt: new Date(),
            edit: 'recolor',
          },
        },
      },
      { new: true }
    );

    await storedImage.save();

    return NextResponse.json(
      { message: 'Upload Successful', url: result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Upload error:', error.message);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}

// https://res.cloudinary.com/demo/image/upload/e_gen_recolor:prompt_the jacket on the right;to-color_pink/docs/jackets.jpg
