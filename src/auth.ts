import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import Google from 'next-auth/providers/google';
import clientPromise from '@/db/client';
import connectDB from './db/mongodb';
import { users } from './db/schema';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [Google],
  session: {
    strategy: 'database',
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user }) {
      await connectDB();
      const existingUser = await users.findOne({ email: user.email });
      if (!existingUser) {
        await users.create({
          name: user.name,
          email: user.email,
          profile: user.image,
          image: [],
        });
      }
      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
});
