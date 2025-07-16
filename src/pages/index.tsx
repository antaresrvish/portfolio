import Profile from "@/components/profile";
import SocialLinks from "@/components/social-links";
import Menu from "@/components/menu";
import DynamicLayer from "@/components/dynamic-layer";
import { MenuProvider } from "@/contexts/menu-context";
import StoryblokProvider from "@/components/storyblok-provider";
import { Outfit } from "next/font/google";
import BlurFooter from "@/components/blur-footer";
import Background from "@/components/background";
import { GetStaticProps } from 'next';
import { ISocialLinks } from "@/types/components/social-links";
import { IProfile } from "@/types/components/profile";
import getStoryblokStaticProps from "@/utils/storyblok-conn";
import { IOne } from "@/types/components/layers/one";
import { ITwoService } from "@/types/components/layers/two";
import { IThree } from "@/types/components/layers/three";
import { IFive } from "@/types/components/layers/five";
import { IFour } from "@/types/components/layers/four";
import { IMenuItem } from "@/types/components/menu-item";
import { ICard } from "@/types/components/templates/card";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

interface HomeProps {
  profileData: IProfile;
  socialData: ISocialLinks;
  layerOne: IOne | ICard;
  layerTwo: ITwoService;
  layerThree: IThree;
  layerFour: IFour;
  layerFive: IFive;
  menuData: IMenuItem;
}
export default function Home({ profileData, socialData, layerOne, layerTwo, layerThree, layerFour, layerFive, menuData }: HomeProps) {
  
  const layerData: Record<string, any> = {};
  const componentToLayerMap: Record<string, any> = {
    'One': layerOne,
    'Card': layerOne,
    'Two': layerTwo,
    'Three': layerThree,
    'Four': layerFour,
    'Five': layerFive
  };
  
  if (menuData && Array.isArray(menuData)) {
    menuData.forEach((menuItem) => {
      if (menuItem && menuItem.component && menuItem.id) {
        const layerDataForComponent = componentToLayerMap[menuItem.component];
        if (layerDataForComponent) {
          layerData[menuItem.id] = layerDataForComponent;
        }
      }
    });
  }
  console.log(layerData)
  return (
    <StoryblokProvider>
      <MenuProvider menuData={menuData}>
        <Background 
          useBeams={true}
          useNoise={true}
          beamsProps={{
            beamWidth: 2,
            beamHeight: 30,
            beamNumber: 10,
            lightColor: "#aeeccf",
            speed: 2,
            noiseIntensity: 0,
            scale: 0.3,
            rotation: 145
          }}
          noiseProps={{
            patternSize: 20,
            patternAlpha: 10,
            patternRefreshInterval: 1
          }}
        />
        <div className={`${geistSans.className} flex justify-center h-screen sm:px-10 px-6 relative z-10`}>
          <div className="flex flex-col md:w-[700px] w-full md:pt-24 pt-20">
            <div className="w-full flex flex-col">
              <Profile profile={profileData} />
              <SocialLinks data={socialData} />
              <Menu menuData={menuData} />
              <DynamicLayer data={layerData} menuData={menuData} />
            </div>
          </div>
        </div>
        <BlurFooter />
      </MenuProvider>
    </StoryblokProvider>
  );
}

export const getStaticProps: GetStaticProps = getStoryblokStaticProps;

