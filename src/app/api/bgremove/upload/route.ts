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
    return NextResponse.json({ message: 'Sign In first' }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get('file');
    const title = formData.get('title') as string;

    // Check if file exists and is an instance of File
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: 'Please Provide a valid File' },
        { status: 400 }
      );
    }

    // Check if file type is valid
    if (!file.type || !file.type.startsWith('image/')) {
      return NextResponse.json(
        { message: 'Invalid file type, only image files allowed' },
        { status: 400 }
      );
    }

    if (!title) {
      return NextResponse.json(
        { message: 'Please Provide a Title' },
        { status: 400 }
      );
    }

    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = `data:${file.type};base64,${buffer.toString('base64')}`;

    // Check if base64Image is generated correctly
    if (!base64Image || base64Image.trim().length === 0) {
      return NextResponse.json(
        { message: 'Error converting file to base64' },
        { status: 500 }
      );
    }

    // Upload image to Cloudinary
    const result = await cloudinary.v2.uploader.upload(base64Image, {
      folder: 'uploads',
      transformation: [
        { quality: 'auto:best' }, // Selects best quality
        { effect: 'sharpen' }, // Sharpens details
        { effect: 'enhance' }, // Improves overall look
        { format: 'auto' },
      ],
    });

    // Connect to the database
    await connectDB().catch((e) => {
      console.log(e);
    });

    // Store the image information in the database
    const storedImage = new imageModel({
      imageUrl: result.secure_url,
      uploadedBy: session.user?.name,
      uploadedByEmail: session.user?.email,
      edit: 'bgRemove',
      title,
      name: session.user?.name,
    });

    // Update the user's image list in the database
    await users.findOneAndUpdate(
      { email: session.user?.email }, // Find the user by email
      {
        $push: {
          image: {
            id: result.public_id,
            title: title || '',
            url: result.secure_url,
            uploadedAt: new Date(),
            edit: 'bgRemove',
          },
        },
      },
      { new: true }
    );

    // Save the image record
    await storedImage.save();

    return NextResponse.json(
      { message: 'Upload Successful', url: result.secure_url },
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
