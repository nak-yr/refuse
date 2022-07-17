/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { keyframes } from "@emotion/react";
import { css, cx } from "@emotion/css";

const Unknown: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Poetry: Unknown</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1 className={styles.viewArea} style={{ fontSize: "3em" }}>
          Unknown
        </h1>
        <div className={cx(styles.viewArea, styles.area1)}>Area1</div>
        <div className={cx(styles.viewArea, styles.area2)}>Area2</div>
        <div className={cx(styles.viewArea, styles.area3)}>Area3</div>
      </div>
    </div>
  );
};

export default Unknown;

// 以下CSS

const styles = {
  wrapper: css({
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
  }),

  main: css({
    overflow: "auto",
    scrollSnapType: "y mandatory",
    height: "100vh",
    width: "100vw",
  }),

  viewArea: css({
    display: "flex",
    scrollSnapAlign: "start",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  }),

  area1: css({
    color: "white",
    backgroundColor: "black",
  }),

  area2: css({
    backgroundColor: "white",
  }),

  area3: css({
    backgroundColor: "blue",
  }),
};
