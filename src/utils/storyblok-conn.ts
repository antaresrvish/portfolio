import { GetStaticProps } from "next";
import { getStoryblokApi } from '@/lib/storyblok';

import { IProfile } from "@/types/components/profile";
import { ISocialLinks } from "@/types/components/social-links";
import { IOne } from "@/types/components/layers/one";
import { ITwoService, IService } from "@/types/components/layers/two";
import { IThree } from "@/types/components/layers/three";
import { IFour } from "@/types/components/layers/four";
import { IFive } from "@/types/components/layers/five";
import { IMenuItem } from "@/types/components/menu-item";
import { Profile, Social, Project, Service, Client, TechStack, Connect, Menu } from "@/types/components/storyblok/space-types/storyblok-components";


export const getStaticProps: GetStaticProps = async () => {
    try {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('API request timeout')), 8000); // 8 second timeout
        });

        const apiPromise = (async () => {
            const storyblokApi = await getStoryblokApi();
            return await storyblokApi.get(`cdn/stories/data`, { 
                version: process.env.NODE_ENV === 'development' ? 'draft' : 'published'
            });
        })();

        const raw: any = await Promise.race([apiPromise, timeoutPromise]);
        
        if (!raw?.data?.story?.content?.body) {
            throw new Error('Invalid data structure received from Storyblok');
        }
        
        const data = raw.data.story.content.body;

        if (!Array.isArray(data)) {
            throw new Error('Expected data to be an array');
        }

        let profileData: IProfile | null = null;
        let socialData: ISocialLinks = [];
        let projectData: IOne = [];
        let serviceData: ITwoService | null = null;
        let clientData: IThree = [];
        let techStackData: IFour = [];
        let connectData: IFive = [];
        let menuData: IMenuItem = [];

        data.forEach((item: Profile | Social | Project | Service | Client | TechStack | Connect | Menu, index: number) => {
            if (!item || !item.component) {
                return;
            }
            
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
                case "Menu": {
                    const menuItem = item as Menu;

                    if(menuItem.menu?.tbody) {
                        menuItem.menu.tbody.forEach(row => {
                            if(row.body && row.body.length > 0) {
                                menuData.push({
                                    id: row.body[0]?.value || "",
                                    title: row.body[1]?.value || "",
                                    component: row.body[2]?.value || ""
                                })
                            }
                        })
                    }

                    break;
                }
                default: {
                    if (!profileData) {
                        profileData = {
                            title: "Error - No data returned",
                            biography: ["No profile data available"],
                            photoUrl: ""
                        };
                    }

                    if (socialData.length === 0) {
                        socialData = [
                            { tooltip: "", link: "", icon: "" },
                            { tooltip: "", link: "", icon: "" },
                            { tooltip: "", link: "", icon: "" }
                        ];
                    }

                    if (projectData.length === 0) {
                        projectData = [];
                    }

                    if (!serviceData) {
                        serviceData = {
                            services: [],
                            bookCallLink: "",
                            emailLink: ""
                        };
                    }

                    if (clientData.length === 0) {
                        clientData = [];
                    }

                    if (techStackData.length === 0) {
                        techStackData = [];
                    }

                    if (connectData.length === 0) {
                        connectData = [];
                    }

                    if (menuData.length === 0) {
                        menuData = [];
                    }

                    break;
                }
            }
        });



        return {
            props: {
                profileData: profileData,
                socialData: socialData,
                layerOne: projectData,
                layerTwo: serviceData,
                layerThree: clientData,
                layerFour: techStackData,
                layerFive: connectData,
                menuData: menuData
            },
            revalidate: 3600
        };
    } catch (error) {
        console.error("Storyblok fetch error:", error);
        return {
            props: {
                profileData: {
                    title: "Error",
                    biography: [
                        "Failed to load data from Storyblok"
                    ],
                    photoUrl: ""
                },
                socialData: [
                    { tooltip: "", link: "", icon: "" },
                    { tooltip: "", link: "", icon: "" },
                    { tooltip: "", link: "", icon: "" }
                ],
                layerOne: [],
                layerTwo: {
                    services: [],
                    bookCallLink: "",
                    emailLink: ""
                },
                layerThree: [],
                layerFour: [],
                layerFive: [],
                menuData: []
            },
            revalidate: 60
        }
    }


};

export default getStaticProps;