import { GetServerSideProps } from "next";
import { getStoryblokApi } from '@/lib/storyblok';

import { IProfile } from "@/types/components/profile";
import { ISocialLinks } from "@/types/components/social-links";
import { IOne } from "@/types/components/layers/one";
import { Profile, Social, Project } from "@/types/components/storyblok/space-types/storyblok-components";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const storyblokApi = await getStoryblokApi();
        const raw = await storyblokApi.get(`cdn/stories/data`, { version: 'draft' });
        const data = raw.data.story.content.body;

        let profileData: IProfile | null = null;
        let socialData: ISocialLinks = [];
        let projectData: IOne = [];

        data.forEach((item: Profile | Social | Project) => {
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
                projectData: projectData
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
                ]
            }
        }
    }


};

export default getServerSideProps;