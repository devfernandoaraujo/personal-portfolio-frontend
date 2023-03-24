import '@/styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { metadata } from '@/lib/metadata';
import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(',')} />
        <meta name="referrer" content={metadata.referrer}></meta>
        <meta name="color-scheme" content={metadata.colorScheme}></meta>
        <meta name="category" content={metadata.category}></meta>
        <meta name="theme-color" content={metadata.themeColor}></meta>
        <meta
          name="viewport"
          content={`width=${metadata.viewport.width}, height=${metadata.viewport.height}, initial-scale=${metadata.viewport.initialScale}, maximum-scale=${metadata.viewport.maximumScale}`}
        />
        <meta name="google-site-verification" content={metadata.verification.google}></meta>
        <meta name="yandex" content={metadata.verification.yandex}></meta>
        <meta name="yahoo" content={metadata.verification.yahoo}></meta>
        <meta name="robots" content={JSON.stringify(metadata.robots)}></meta>
        <meta
          name="og:googleBot"
          content={`index=${metadata.robots.googleBot.index}, follow=${metadata.robots.googleBot.follow}, noimageindex=${metadata.robots.googleBot.noimageindex}, 'max-snippet'=${metadata.robots.googleBot['max-snippet']}, 'max-video-preview'=${metadata.robots.googleBot['max-video-preview']}, 'max-image-preview'=${metadata.robots.googleBot['max-image-preview']}`}
        ></meta>
        <meta
          name="viewport"
          content={`width=${metadata.viewport.width}, height=${metadata.viewport.height}, initialScale=${metadata.viewport.initialScale}, maximumScale=${metadata.viewport.maximumScale}`}
        ></meta>
        <meta name="icons" content={`icon=${metadata.icons.icon}; shortcut=${metadata.icons.shortcut}; apple=${metadata.icons.apple}`}></meta>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}
