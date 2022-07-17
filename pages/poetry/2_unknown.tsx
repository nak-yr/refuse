/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { keyframes } from "@emotion/react";
import { css, cx } from "@emotion/css";

const Unknown: NextPage = () => {
  return (
    <>
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
          <div className={styles.viewArea}>
            <h1 className={styles.paragraph} style={{ fontSize: "2em" }}>
              美しいものを探している。
            </h1>
          </div>
          <div className={cx(styles.viewArea, styles.area1)}>
            <p className={styles.paragraph}>
              誰によっても変わらない、何者にも干渉しない、
            </p>
          </div>
          <div className={cx(styles.viewArea, styles.area2)}>
            <p className={styles.paragraph}>
              きっと僕たちでは、手を伸ばすことも触れることもできない様な、
              <br />
              人生をかけて追い求めたものにしか、その片鱗を見せない様な、
            </p>
          </div>
          <div className={cx(styles.viewArea, styles.area3)}>
            <p className={styles.paragraph}>そんなものを探している。</p>
          </div>
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100vh",
              zIndex: "-1",
            }}
          >
            <Image
              src={`/backgroundImage.jpeg`}
              layout={`fill`}
              objectFit={`cover`}
            />
          </div>
        </div>
      </div>
    </>
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
    flexDirection: "column",
    backgroundColor: "transparent",
  }),

  area2: css({
    flexDirection: "column",
    backgroundColor: "transparent",
  }),

  area3: css({
    flexDirection: "column",
    backgroundColor: "transparent",
  }),

  paragraph: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    width: "90%",
    backgroundColor: "rgba(240, 240, 240, 0.8)",
  }),
};
