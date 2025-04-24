import NextAuth from 'next-auth';

import { MongoDBAdapter } from '@auth/mongodb-adapter';

import authConfig from '@/auth.config';
import clientPromise from '@/db/client';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  ...authConfig,
  session: {
    strategy: 'database',
  },
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});
