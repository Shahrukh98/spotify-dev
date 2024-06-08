import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Playbar from "@/components/Playbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo Spotify",
  description: "App for demo spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Playbar 
        playing={true}
        artist="Lord Huron"
        songTitle="The Night We Met"
        liked={true}
        songDuration={234}
       />
      </body>
    </html>
  );
}
