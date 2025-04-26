import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
// import connectDB from './db/mongodb';
// import { users } from './db/schema';

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET,
    }),
  ],

  pages: {
    signIn: '/',
  },
} satisfies NextAuthConfig;
