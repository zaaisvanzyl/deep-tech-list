import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

// Import the fonts
const GeistMonoVF = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono-vf",
});

const GeistVF = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-vf",
});

export const metadata: Metadata = {
  title: "Deep Tech List",
  description: "Directory of some of the most ambitious startups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${GeistMonoVF.variable} ${GeistVF.variable}`}>
            <Providers>{children}</Providers>
        </body>
    </html>
  );
}
