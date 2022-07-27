/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { css, cx } from "@emotion/css";

const Blind: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Poetry: Blind</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <p className={cx(styles.paragraph, styles.strong)}>
          僕は君を笑わない。
        </p>
        <p className={styles.paragraph} style={{ textIndent: "2em" }}>
          人は他人に対して、幸福を願ったりすることがあるだろう。
        </p>
        <p
          className={styles.paragraph}
          style={{ color: "gray", textIndent: "6em" }}
        >
          「貴方の行く末に、幸多からんことを」などと。
        </p>
        <p className={styles.paragraph} style={{ textIndent: "3em" }}>
          違うんだ。そうじゃないんだ。
        </p>
        <p className={cx(styles.paragraph, styles.strong)}>
          幸せに成ることだけが、幸せじゃない人だっているんだ。
        </p>
        <p
          className={styles.paragraph}
          style={{ color: "gray", textIndent: "3em" }}
        >
          例えどんな姿に成り果てようと、 他人から笑われようと。
        </p>
        <p className={styles.paragraph}>僕だけは、君を笑わない。</p>
        <p className={styles.paragraph} style={{ textIndent: "3em" }}>
          君の魂だけを、僕は敬愛している。
        </p>
        <p
          className={styles.paragraph}
          style={{ color: "gray", textIndent: "6em" }}
        >
          君の幸せは、幸せで在ることだけじゃないんだ。
        </p>
        <p className={cx(styles.paragraph, styles.strong)}>
          ねえ、きっと、君は君の在る通りに。
        </p>
      </div>
    </div>
  );
};

export default Blind;

const styles = {
  wrapper: css({
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
    background: "linear-gradient(0deg, #6aa4c2, #e4dc8a)",
  }),

  main: css({
    display: "flex",
    flexDirection: "row-reverse",
    alignContent: "center",
    justifyContent: "unset",
    margin: "5vh auto",
    height: "80%",
    overflowX: "scroll",
    flexWrap: "nowrap",
  }),

  paragraph: css({
    writingMode: "vertical-rl",
    marginLeft: "2vmax",
    marginRight: "2max",
  }),

  strong: css({
    fontSize: "1.5em",
  }),
};
