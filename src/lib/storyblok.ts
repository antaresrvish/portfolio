import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.STORYBLOK_DELIVERY_API_ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: {
        region: 'eu',
    },
});