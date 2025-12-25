'use server';
import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: 'Morphify',
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
  }
};

export default connectDB;
