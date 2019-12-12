import { useState, useCallback } from "react";
import useInterval from "@use-it/interval";

import Head from "next/head";

const vibes = ["🏄‍♂️", "🏊", "🐚", "🏝️", "🍹", "🌴"];

export default () => {
  const [vibeIndex, setVibeIndex] = useState(0);
  const slideVibe = useCallback(() => {
    setVibeIndex(vibeIndex === vibes.length - 1 ? 0 : vibeIndex + 1);
  }, [vibeIndex]);
  useInterval(slideVibe, 100);

  return (
    <Head>
      <title>{vibes[vibeIndex]} Vibe Capital</title>
    </Head>
  );
};
