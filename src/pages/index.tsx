import Profile from "@/components/profile";
import SocialLinks from "@/components/social-links";
import Menu from "@/components/menu";
import MenuLayer from "@/components/menu-layer";
import { MenuProvider } from "@/contexts/menu-context";
import StoryblokProvider from "@/components/storyblok-provider";
import { Outfit } from "next/font/google";
import BlurFooter from "@/components/blur-footer";
import One from "@/components/layers/one";
import Two from "@/components/layers/two";
import Three from "@/components/layers/three";
import Four from "@/components/layers/four";
import Five from "@/components/layers/five";
import { GetServerSideProps } from 'next';
import { ISocialLinks } from "@/types/components/social-links";
import { IProfile } from "@/types/components/profile";
import { getServerSideProps as getStoryblokServerSideProps } from "@/utils/storyblok-conn";
import { IOne } from "@/types/components/layers/one";
import { ITwoService } from "@/types/components/layers/two";
import { IThree } from "@/types/components/layers/three";
import { IFive } from "@/types/components/layers/five";
import { IFour } from "@/types/components/layers/four";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface HomeProps {
  profileData: IProfile;
  socialData: ISocialLinks;
  projectData: IOne;
  serviceData: ITwoService;
  clientData: IThree;
  techStackData: IFour;
  connectData: IFive;
}

const portfolioData = {
  menu: [
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'clients', label: 'Clients' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'connect', label: 'Connect' }
  ],
};

export default function Home({ profileData, socialData, projectData, serviceData, clientData, techStackData, connectData }: HomeProps) {
  console.log("clientData", clientData);
  return (
    <StoryblokProvider>
      <MenuProvider>
        <div
          className={`${geistSans.className} flex justify-center h-screen bg-grey-100 sm:px-10 px-6`}>
          <div className="flex flex-col md:w-[700px] w-full md:pt-24 pt-20">
            <div className="w-full flex flex-col">
              <Profile profile={profileData} />
              <SocialLinks data={socialData} />
              <Menu menuItems={portfolioData.menu} />
              <MenuLayer layerConfig={{
                'projects': {
                  component: <One data={projectData} />
                },
                'services': {
                  component: <Two data={serviceData} />
                },
                'clients': {
                  component: <Three data={clientData} />
                },
                'techstack': {
                  component: <Four data={techStackData} />
                },
                'connect': {
                  component: <Five data={connectData}></Five>
                }

              }} />
            </div>
          </div>
        </div>
        <BlurFooter></BlurFooter>
      </MenuProvider>
    </StoryblokProvider>
  );
}

export const getServerSideProps: GetServerSideProps = getStoryblokServerSideProps;

