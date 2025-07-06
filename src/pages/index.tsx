import Profile from "@/components/profile";
import SocialLinks from "@/components/social-links";
import Menu from "@/components/menu";
import DynamicLayer from "@/components/dynamic-layer";
import { MenuProvider } from "@/contexts/menu-context";
import StoryblokProvider from "@/components/storyblok-provider";
import { Outfit } from "next/font/google";
import BlurFooter from "@/components/blur-footer";
import { GetServerSideProps } from 'next';
import { ISocialLinks } from "@/types/components/social-links";
import { IProfile } from "@/types/components/profile";
import { getServerSideProps as getStoryblokServerSideProps } from "@/utils/storyblok-conn";
import { IOne } from "@/types/components/layers/one";
import { ITwoService } from "@/types/components/layers/two";
import { IThree } from "@/types/components/layers/three";
import { IFive } from "@/types/components/layers/five";
import { IFour } from "@/types/components/layers/four";

export const runtime = 'experimental-edge';

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

interface HomeProps {
  profileData: IProfile;
  socialData: ISocialLinks;
  projectData: IOne;
  serviceData: ITwoService;
  clientData: IThree;
  techStackData: IFour;
  connectData: IFive;
}

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
              <Menu />
              <DynamicLayer 
                projectData={projectData}
                serviceData={serviceData}
                clientData={clientData}
                techStackData={techStackData}
                connectData={connectData}
              />
            </div>
          </div>
        </div>
        <BlurFooter></BlurFooter>
      </MenuProvider>
    </StoryblokProvider>
  );
}

export const getServerSideProps: GetServerSideProps = getStoryblokServerSideProps;

