import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['100', '400', '700'],
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Morphify',
  description: 'Tailor Your Images to your liking with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased `}>{children}</body>
    </html>
  );
}
