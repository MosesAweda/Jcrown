import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Footer from './components/Footer'
import Navigation from './components/Navigation'
 
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const champ = localFont({
  src: [
    {
      path: '../public/fonts/Champ-Black.woff',
      weight: '400',
      style: 'normal',
    },
    // Add other weights/styles if available
  ],
  variable: '--font-champ'
})


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jcrown Sports",
  description: "Jcrown Sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        
        <link rel="icon" href="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851527/logo_x1lvxg.svg"    />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
