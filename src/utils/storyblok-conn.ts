import { GetServerSideProps } from "next";
import { getStoryblokApi } from '@/lib/storyblok';

import { IProfile } from "@/types/components/profile";
import { ISocialLinks } from "@/types/components/social-links";
import { IOne } from "@/types/components/layers/one";
import { ITwoService, IService } from "@/types/components/layers/two";
import { IThree } from "@/types/components/layers/three";

import { Profile, Social, Project, Service, Client, TechStack, Connect } from "@/types/components/storyblok/space-types/storyblok-components";
import { IFour } from "@/types/components/layers/four";
import { IFive } from "@/types/components/layers/five";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const storyblokApi = await getStoryblokApi();
        const raw = await storyblokApi.get(`cdn/stories/data`, { version: 'draft' });
        const data = raw.data.story.content.body;

        let profileData: IProfile | null = null;
        let socialData: ISocialLinks = [];
        let projectData: IOne = [];
        let serviceData: ITwoService | null = null;
        let clientData: IThree = [];
        let techStackData: IFour = [];
        let connectData: IFive = [];

        data.forEach((item: Profile | Social | Project | Service | Client | TechStack | Connect, index: number) => {
            switch (item.component) {
                case "Profile": {
                    const profileItem = item as Profile;

                    const biographyArray: string[] = [];
                    if (profileItem.biography?.tbody) {
                        profileItem.biography.tbody.forEach(row => {
                            if (row.body && row.body.length > 0) {
                                biographyArray.push(row.body[0].value);
                            }
                        });
                    }

                    profileData = {
                        title: profileItem.title || "",
                        biography: biographyArray,
                        photoUrl: profileItem.photoUrl?.cached_url || profileItem.photoUrl?.url || ""
                    };
                    break;
                }
                case "Social": {
                    const socialItem = item as Social;

                    if (socialItem.socialLinks?.tbody) {
                        socialItem.socialLinks.tbody.forEach(row => {
                            if (row.body && row.body.length > 0) {
                                socialData.push({
                                    tooltip: row.body[0]?.value || "",
                                    link: row.body[1]?.value || "",
                                    icon: row.body[2]?.value || ""
                                });
                            }
                        });
                    }
                    break;
                }
                case "Project": {
                    const projectItem = item as Project;

                    if(projectItem.Project?.tbody) {
                        projectItem.Project?.tbody.forEach(row => {
                            if (row.body && row.body.length > 0) {
                                projectData.push({
                                    iconUrl: row.body[0]?.value || "",
                                    title: row.body[1]?.value || "",
                                    description: row.body[2]?.value || "",
                                    photoUrl: row.body[3]?.value || "",
                                    link: row.body[4]?.value || "",
                                });
                            }
                        })
                    }
                    break;
                }
                case "Service": {
                    const serviceItem = item as Service;
                    const services: IService[] = [];
                    
                    if (serviceItem.services?.tbody) {
                        serviceItem.services.tbody.forEach((row: any) => {
                            if (row.body && row.body.length > 0) {
                                services.push({
                                    title: row.body[0]?.value || "",
                                    price: parseFloat(row.body[1]?.value) || 0
                                });
                            }
                        });
                    }
                    
                    serviceData = {
                        services: services,
                        bookCallLink: serviceItem.bookCallLink,
                        emailLink: serviceItem.emailLink
                    };
                    break;
                }
                case "Client": {
                    const clientItem = item as Client;

                    if (clientItem.clients?.tbody) {
                        clientItem.clients.tbody.forEach(row => {
                            if (row.body && row.body.length > 0) {
                                clientData.push({
                                    text: row.body[0]?.value || "",
                                    avatar: row.body[1]?.value || "",
                                    author: row.body[2]?.value || "",
                                    projectName: row.body[3]?.value || ""
                                });
                            }
                        });
                    }

                    console.log("Client data:", clientData);
                    break;
                }
                case "Tech Stack": {
                    const techStackItem = item as TechStack;

                    if (techStackItem.tech_stack?.tbody) {
                        techStackItem.tech_stack.tbody.forEach(row => {
                            if (row.body && row.body.length > 0) {
                                techStackData.push({
                                    title: row.body[0]?.value || "",
                                    photoUrl: row.body[1]?.value || "",
                                    url: row.body[2]?.value || ""
                                });
                            }
                        });
                    }
                    break;
                }
                case "Connect": {
                    const connectItem = item as Connect;

                    if (connectItem.connect?.tbody) {
                        connectItem.connect.tbody.forEach(row => {
                            if (row.body && row.body.length > 0) {
                                connectData.push({
                                    title: row.body[0]?.value || "",
                                    tag: row.body[1]?.value || "",
                                    link: row.body[2]?.value || "",
                                    icon: row.body[3]?.value || ""
                                });
                            }
                        });
                    }
                    break;
                }
                default: {
                    const socialData: IProfile = {
                        title: "Error no data returned",
                        biography: [
                            "error"
                        ],
                        photoUrl: ""
                    };

                    const profileData: ISocialLinks = [
                        { tooltip: "", link: "", icon: "" },
                        { tooltip: "", link: "", icon: "" },
                        { tooltip: "", link: "", icon: "" }
                    ];

                    break;
                }
            }
        });



        return {
            props: {
                profileData: profileData,
                socialData: socialData,
                projectData: projectData,
                serviceData: serviceData,
                clientData: clientData,
                techStackData: techStackData,
                connectData: connectData,
            },
        };
    } catch (error) {
        console.error("Storyblok fetch error:", error);
        return {
            props: {
                profileData: {
                    title: "Error",
                    biography: [
                        "error no data"
                    ],
                    photoUrl: ""
                },
                socialData: [
                    { tooltip: "", link: "", icon: "" },
                    { tooltip: "", link: "", icon: "" },
                    { tooltip: "", link: "", icon: "" }
                ],
                serviceData: null
            }
        }
    }


};

export default getServerSideProps;