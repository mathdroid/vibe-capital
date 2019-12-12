import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import useTimer from "../components/useTimer";

const TitleChanger = dynamic(() => import("../components/TitleChanger"), {
  ssr: false
});

const Home = () => {
  const expiryTimestamp = new Date("2020-01-01");
  const { days, hours, minutes, seconds } = useTimer({ expiryTimestamp });
  return (
    <>
      <Head>
        <title>🏄‍♂️ Vibe Capital</title>
      </Head>
      <TitleChanger />
      <pre>
        {`${JSON.stringify(
          {
            name: "Vibe Capital 🏄",
            description:
              "we are a nano-fund for digital creators in emerging markets 🤑",
            status: `chillax 🌴`,
            contact: "soon 😎",
            "how long": `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`,
            "did you mean 2020?": true
          },
          null,
          2
        )}`}
      </pre>
      <style jsx global>{`
        html,
        body,
        #__next {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }
        pre {
          margin: 10rem auto;
          width: 60ch;
          overflow-x: auto;
          white-space: pre-wrap;
          white-space: -moz-pre-wrap;
          white-space: -pre-wrap;
          white-space: -o-pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  );
};

export default Home;
