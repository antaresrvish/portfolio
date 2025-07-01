import Profile from "@/components/profile";
import SocialLinks from "@/components/social-links";
import Menu from "@/components/menu";
import MenuLayer from "@/components/menu-layer";
import { MenuProvider } from "@/contexts/MenuContext";
import { Outfit } from "next/font/google";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <MenuProvider>
      <div
        className={`${geistSans.className} flex justify-center h-screen bg-grey-100 sm:px-10 px-6`}>
        <div className="flex flex-col md:w-[700px] w-full md:pt-24 pt-20">
          <div className="w-full flex flex-col">
            <Profile profile={{
              title: "Hey, I'm Yusuf Yıldırım.",
              biography: [
                "I'm a Backend Developer and Electronics Hobbyist.",
                "I spend most of the time thinking about Tea."
              ],
              photoUrl: "/profile-photo.jpeg"
            }} />
            <SocialLinks data={[
              { tooltip: "Github Profile", link: "https://www.github.com/antaresrvish", icon: "Github" },
              { tooltip: "LinkedIn Profile", link: "https://www.linkedin.com/in/antaresrvish", icon: "Linkedin" },
              { tooltip: "Youtube Profile", link: "https://www.youtube.com/u/antaresrvish", icon: "Youtube" }
            ]} />
            <Menu />
            <MenuLayer/>
          </div>
        </div>
      </div>
    </MenuProvider>
  );
}
