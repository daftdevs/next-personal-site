import Head from "next/head";
import React, { HTMLAttributes } from "react";

type LayoutProps = {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
};

const Layout = ({ title, description, className, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`min-h-screen w-screen bg-gray-200`}>
          <div className={`mx-8 lg:mx-auto max-w-7xl ${className}`}>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
