import { ReactNode } from "react";
import GlobalStyle from "../styles/globalStyles";
import Head from "next/head";

export const metadata = {
  title: "My Diary App",
  description: "A diary application built with Next.js 13",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Preconnect do Google Fonts i fonts.gstatic.com */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* Link do Google Fonts dla Allura */}
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
