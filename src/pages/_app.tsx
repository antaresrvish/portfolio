import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const sectionTitles = {
  projects: 'Projects - Portfolio',
  services: 'Services - Portfolio', 
  clients: 'Clients - Portfolio',
  techstack: 'Tech Stack - Portfolio',
  connect: 'Connect - Portfolio'
} as const;

const sectionDescriptions = {
  projects: 'Explore my latest projects and development work',
  services: 'Professional services and expertise I offer',
  clients: 'Companies and clients I have worked with',
  techstack: 'Technologies and tools I work with',
  connect: 'Get in touch for collaborations and opportunities'
} as const;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState('Portfolio');
  const [pageDescription, setPageDescription] = useState('Professional portfolio showcasing projects, services, and expertise');

  useEffect(() => {
    const section = router.query.section as keyof typeof sectionTitles;
    
    if (section && sectionTitles[section]) {
      setPageTitle(sectionTitles[section]);
      setPageDescription(sectionDescriptions[section]);
    } else {
      setPageTitle('Portfolio');
      setPageDescription('Professional portfolio showcasing projects, services, and expertise');
    }
  }, [router.query.section]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
