import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState } from "react";
import SEOHead from "../components/SEOHead/SEOHead";
import React from "react";
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps } : AppProps) => {
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!isClicked)
  }
  return (
    <>
      <SEOHead url={undefined} />
      <main>
        <Layout handleClick={handleClick} isClicked={isClicked}>
          <Component
            {...pageProps}
            handleclick={handleClick}
            isClicked={isClicked}
          />
        </Layout>
      </main>
    </>
  )
}

export default MyApp
