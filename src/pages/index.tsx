import Profile from "@/components/profile";
import SocialLinks from "@/components/social-links";
import Menu from "@/components/menu";
import MenuLayer from "@/components/menu-layer";
import { MenuProvider } from "@/contexts/menu-context";
import { Outfit } from "next/font/google";
import One from "@/pages/layers/one";
import Two from "@/pages/layers/two";
import Three from "@/pages/layers/three";
import Four from "@/pages/layers/four";
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
    { id: 'clients', label: 'Clients' },
    { id: 'techstack', label: 'Tech Stack' }
  ],
  layerConfig: {
    'projects': {
      component: <One data={[
        { iconUrl: '/rust.png', title: 'Rust KVM', description: 'Rust based key-value in memory database', photoUrl: './test.png', link: 'https://github.com/antaresrvish/rust-kvm' },
        { iconUrl: '/rust.png', title: 'Next.js Portfolio', description: 'Modern portfolio website', photoUrl: './test.png', link: '#' },
        { iconUrl: '/python.png', title: 'Weather CLI', description: 'Command-line weather app in Python', photoUrl: './weather.png', link: 'https://github.com/antaresrvish/weather-cli' },
        { iconUrl: '/node.png', title: 'Express API Boilerplate', description: 'Starter template for REST APIs', photoUrl: './express.png', link: 'https://github.com/antaresrvish/express-api-boilerplate' }
      ]} />
    },
    'about': {
      component: <Two data={{
        services: [
          { id: 1, title: ".Net microservices development", price: 1500 },
          { id: 2, title: "REST API Development (Node.js, Express)", price: 800 },
          { id: 3, title: "IoT Device Integration & Firmware", price: 1200 },
          { id: 4, title: "Database Design & Optimization", price: 600 },
          { id: 5, title: "Technical Consulting (per hour)", price: 100 },
          { id: 6, title: "Custom Web Scraping Solutions", price: 900 }
        ],
        bookCallLink: "#",
        emailLink: "#"
      }}/>
    },
    'clients': {
      component: <Three data={[
        {
            id: 1,
            text: "Working with this developer was an amazing experience! The project was delivered on time and exceeded all expectations. Highly professional and skilled.",
            author: "John Doe",
            projectName: "@rust-kvm"
        },
        {
            id: 2,
            text: "Exceptional work quality and attention to detail. The communication throughout the project was excellent and the final result was exactly what we needed.",
            author: "Michael Chen",
            projectName: "@pic-18f4550-temp"
        },
        {
            id: 3,
            text: "Outstanding technical skills and creative problem-solving. This developer transformed our vision into reality with precision and expertise.",
            author: "Emma Rodriguez",
            projectName: "@todo-app"
        },
        {
            id: 4,
            text: "Fast turnaround and great communication. Highly recommended for backend projects.",
            author: "Sophia Lee",
            projectName: "@weather-cli"
        }
      ]}/>
    },
    'techstack': {
      component: <Four data={[
        { title: "VS Code", photoUrl: "https://images.icon-icons.com/3053/PNG/512/microsoft_visual_studio_code_macos_bigsur_icon_189957.png", url: "https://code.visualstudio.com"},
        { title: "Rust", photoUrl: "https://www.rust-lang.org/logos/rust-logo-512x512.png", url: "https://www.rust-lang.org" },
        { title: "Node.js", photoUrl: "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", url: "https://nodejs.org" },
        { title: "Python", photoUrl: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png", url: "https://python.org" },
        { title: "Docker", photoUrl: "https://images.icon-icons.com/2108/PNG/512/docker_icon_130955.png", url: "https://www.docker.com" },
        { title: "Assembly", photoUrl: "https://user-images.githubusercontent.com/103866722/194773833-8571f323-4fa8-4036-a51c-57b9d29c683b.svg ", url: "https://en.wikipedia.org/wiki/Assembly_language" },
        { title: "Express.js", photoUrl: "https://images.seeklogo.com/logo-png/27/1/node-js-logo-png_seeklogo-273749.png", url: "https://expressjs.com" },
        { title: "Vue.js", photoUrl: "https://images.seeklogo.com/logo-png/27/1/vue-js-logo-png_seeklogo-274070.png", url: "https://vuejs.org" },
        { title: "React", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", url: "https://react.dev" },
        { title: "Java", photoUrl: "https://cdn-icons-png.flaticon.com/512/226/226777.png", url: "https://www.java.com" },
        { title: "Fastify.js", photoUrl: "https://pbs.twimg.com/profile_images/970652657231847424/mWKpZoM4_400x400.jpg", url: "https://www.fastify.io" },
        { title: "C#", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png", url: "https://learn.microsoft.com/tr-tr/dotnet/csharp/"}
      ]}/>
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
