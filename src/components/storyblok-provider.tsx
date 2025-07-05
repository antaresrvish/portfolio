

import { getStoryblokApi } from "@/lib/storyblok";

export default function StoryblokProvider({ children }: { children: any }) {
    getStoryblokApi();
    return children;
}