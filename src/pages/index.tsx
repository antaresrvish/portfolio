import Profiler from "@/components/profile";
import SocialLinks from "@/components/social-links";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex justify-center h-screen bg-gray-100`}
    >
      <div className="flex-column w-4/6">
        <div className="w-full mt-26 justify-start p-4">
          <Profiler title="Hey, I'm Yusuf Yıldırım." bio1="I'm a Web Designer, Music Artist & Photographer." bio2="I spend most of the time thinking about Tea." />
          <SocialLinks x="#" youtube="#" linkedin="#" telegram="#" foursquare="#" />
        </div>
      </div>

    </div>
  );
}
