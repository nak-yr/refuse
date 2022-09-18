/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { SketchFireworks } from "./sketchfireworks";
import { css, cx } from "@emotion/css";

const Fireworks: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Poetry: Fireworks</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <SketchFireworks />
      </div>
    </div>
  );
};

export default Fireworks;

const styles = {
  wrapper: css({
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
  }),

  main: css({
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  }),
};
