import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'Miu Plays',
  description: 'Gameplay videos and indie game reviews.',
  keywords: [
    'gameplay',
    'indie games',
    'pc games',
    'unity',
    'godot',
    'miu plays',
  ],
  authors: [{ name: 'Kasun Miuranga' }],
  creator: 'Kasun Miuranga',

  openGraph: {
    title: 'Miu Plays',
    description: 'Gameplay videos and indie game reviews.',
    url: 'https://miuplays.github.io',
    siteName: 'Miu Plays',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Miu Plays',
    description: 'Gameplay videos and indie game reviews.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
