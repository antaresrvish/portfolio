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
      className={`${geistSans.className} ${geistMono.className} flex justify-center h-screen bg-gray-100 px-10`}>
      <div className="flex-column md:w-4/5 w-full md:mt-25 mt-20">
        <div className="w-full justify-start">
          <Profiler profile={{
            title: "Hey, I'm Yusuf Yıldırım.",
            biography: [
              "I'm a Backend Developer and Electronics Hobbyist.",
              "I spend most of the time thinking about Tea."
            ],
            photoUrl: "/profile-photo.jpeg"}}/>
          <SocialLinks data={[
            {tooltip: "Github Profile", link: "https://www.github.com/antaresrvish", icon: "Github"},
            {tooltip: "LinkedIn Profile", link: "https://www.linkedin.com/in/antaresrvish", icon: "Linkedin"},
            {tooltip: "Youtube Profile", link: "https://www.youtube.com/u/antaresrvish", icon: "Youtube"}
          ]}/>
        </div>
      </div>
    </div>
  );
}
