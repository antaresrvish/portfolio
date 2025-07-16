import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IMeta } from "@/types/components/meta";

interface PageProps {
  metaData?: IMeta;
  [key: string]: any;
}

const defaultTitle = "Portfolio";
const defaultDescription = "Professional portfolio showcasing projects, services, and expertise";

export default function App({ Component, pageProps }: AppProps & { pageProps: PageProps }) {
  const router = useRouter();
  const [pageTitle, setPageTitle] = useState(defaultTitle);
  const [pageDescription, setPageDescription] = useState(defaultDescription);
  const [favicon, setFavicon] = useState('/favicon.ico');

  useEffect(() => {
    if (pageProps.metaData) {
      setPageTitle(pageProps.metaData.title || defaultTitle);
      setPageDescription(pageProps.metaData.description || defaultDescription);
      setFavicon(pageProps.metaData.favicon || '/favicon.ico');
    }
  }, [pageProps.metaData]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
