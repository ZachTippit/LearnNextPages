import "/styles/globals.css";
import 'styles/shapes.css'
import { useState } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Head from "next/head";
import Script from "next/script";
import Layout from "/components/Layout";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const MyApp = ({ Component, pageProps }) => {

  const [queryClient] = useState(() => new QueryClient())
  
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary>
        <ClerkProvider {...pageProps}>
          <Head>
            <title>Clerk + Next.js Starter</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://cdn.jsdelivr.net/npm/prismjs@1/themes/prism.css" rel="stylesheet" />
          </Head>
          <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
          <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
          <Layout>
              <Component {...pageProps} />
          </Layout>
        </ClerkProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default MyApp;
