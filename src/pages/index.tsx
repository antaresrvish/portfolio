import Profile from "@/components/profile";
import SocialLinks from "@/components/social-links";
import Menu from "@/components/menu";
import MenuLayer from "@/components/menu-layer";
import { MenuProvider } from "@/contexts/menu-context";
import { Outfit } from "next/font/google";
import One from "@/pages/layers/one";
import Two from "@/pages/layers/two";
import Three from "@/pages/layers/three";
import Five from "@/pages/layers/five";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const portfolioData = {
  profile: {
    title: "Hey, I'm Yusuf Yıldırım.",
    biography: [
      "I'm a Backend Developer and Electronics Hobbyist.",
      "I spend most of the time thinking about Tea."
    ],
    photoUrl: "/profile-photo.jpeg"
  },
  socialLinks: [
    { tooltip: "Github Profile", link: "https://www.github.com/antaresrvish", icon: "Github" },
    { tooltip: "LinkedIn Profile", link: "https://www.linkedin.com/in/antaresrvish", icon: "Linkedin" },
    { tooltip: "Youtube Profile", link: "https://www.youtube.com/u/antaresrvish", icon: "Youtube" }
  ],
  menu: [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' }
  ],
  layerConfig: {
    'projects': {
      component: <One data={[
        { iconUrl: '/rust.png', title: 'Rust KVM', description: 'Rust based key-value in memory database', photoUrl: './test.png', link: 'https://github.com/antaresrvish/rust-kvm' },
        { iconUrl: '/rust.png', title: 'Next.js Portfolio', description: 'Modern portfolio website', photoUrl: './test.png', link: '#' }
      ]} />
    },
    'about': {
      component: <Two />
    },
    'work': {
      component: <Three />
    },
    'contact': {
      component: <Five />
    }
  }
};


export default function Home() {
  return (
    <MenuProvider>
      <div
        className={`${geistSans.className} flex justify-center h-screen bg-grey-100 sm:px-10 px-6`}>
        <div className="flex flex-col md:w-[700px] w-full md:pt-24 pt-20">
          <div className="w-full flex flex-col">
            <Profile profile={portfolioData.profile} />
            <SocialLinks data={portfolioData.socialLinks} />
            <Menu menuItems={portfolioData.menu} />
            <MenuLayer layerConfig={portfolioData.layerConfig} />
          </div>
        </div>
      </div>
    </MenuProvider>
  );
}
