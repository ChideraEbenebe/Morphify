import Google from 'next-auth/providers/google';
import type { NextAuthConfig } from 'next-auth';
import connectDB from './db/mongodb';
import { users } from './db/schema';

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET,
    }),
  ],
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
    // async session({ session, token }) {
    //   if (token && session.user && token.sub) {
    //     session.user.id = token.sub;
    //   }
    //   return session;
    // },
    // async jwt({ token }) {
    //   return token;
    // },
    // async redirect({ url, baseUrl }) {
    //   // If the url is within our own site
    //   if (url.startsWith(baseUrl)) return url;
    //   // Otherwise, fallback
    //   return baseUrl + '/b';
    // },
  },
  pages: {
    signIn: '/',
  },
} satisfies NextAuthConfig;
