/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { css } from "@emotion/css";
import { IconButton, Animation } from "rsuite";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import "rsuite/dist/rsuite.min.css";

import React, { useEffect } from "react";

enum DIMENSION {
  HEIGHT = "height",
  WIDTH = "width",
}

interface PoetryEntry {
  date: string;
  title: string;
  link: string;
  description: string;
  reference?: string;
}

// 投稿エントリの情報を格納した配列を定義
const entry: PoetryEntry[] = [
  {
    date: "2022-07-03",
    title: "夏",
    link: "/poetry/1_summer",
    description:
      "今年は夏が来るのが早すぎたので、思い出の中の夏を考えるのと暑さを体感するのが同時になってしまった。思い出と現実が混ざりそうなので、思ったままに書いてみた。",
  },
  {
    date: "2022-07-17",
    title: "東京",
    link: "/poetry/2_tokyo",
    description:
      "東京を歩きながら、生き方についてぼんやりと考えたことを表現してみた。",
  },
  {
    date: "2022-07-27",
    title: "君の幸せは",
    link: "/poetry/3_blind",
    description:
      "ヨルシカ 左右盲 に影響されて作ったもの。敬愛する人の人生に見栄えを期待せず、在るままを認めようとする歌詞に感動して詩を書いた。",
  },
  {
    date: "2022-09-19",
    title: "Fireworks",
    link: "/poetry/4_fireworks",
    description:
      "夏が終わる前に、花火を題材にした作品が欲しくなって作ったもの。",
    reference: "https://github.com/soramoyou04/p5js-animation-shelf",
  },
];

const Poetry: NextPage = () => {
  const dimension: DIMENSION = DIMENSION.WIDTH;

  const router = useRouter();
  const toHome = () => {
    router.push("/");
  };

  const toPoem = (href: string) => {
    router.push(href);
  };

  const [show, setShow] = React.useState(false);
  const onLoad = () => setShow(!show);

  useEffect(() => {
    onLoad();
  }, []);

  const [showPara, setShowPara] = React.useState(false);
  const onFrameLoaded = () => {
    setShowPara(!showPara);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Head>
          <title>Poetry</title>
          <meta
            name="description"
            content="A website created with the desire to be an artist."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.main}>
          {entry.map((ent, index) => (
            <Animation.Collapse
              in={show}
              className={styles.viewArea}
              key={index}
              dimension={dimension}
              onEntered={() => onFrameLoaded()}
            >
              <div className={styles.viewArea} onClick={() => toPoem(ent.link)}>
                <div className={styles.paragraph}>
                  <Animation.Fade in={showPara}>
                    <div className={styles.innerParagraph}>
                      <p style={{ fontSize: "1.5em" }}>{ent.title}</p>
                      <p style={{ width: "90%" }}>at: {ent.date}</p>
                      <hr style={{ width: "90%" }} />
                      <p style={{ width: "90%" }}>{ent.description}</p>
                    </div>
                  </Animation.Fade>
                </div>
              </div>
            </Animation.Collapse>
          ))}
        </div>
      </div>
      <IconButton
        className={styles.button}
        icon={<ArrowLeftLineIcon />}
        onClick={toHome}
        appearance="primary"
        size="lg"
        circle
      />
    </>
  );
};

export default Poetry;

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
    display: "flex!important",
    scrollSnapAlign: "start",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  }),

  paragraph: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "90%",
    width: "90%",
    backgroundColor: "rgba(15, 15, 15, 0.9)",
  }),

  innerParagraph: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "100%",
    width: "100%",
  }),

  button: css({
    display: "fixed",
    zIndex: "99999",
    bottom: "7vh",
    left: "2vw",
    backgroundColor: "rgba(100, 100, 100, 0.7)",
    overflow: "hidden",
  }),
};
