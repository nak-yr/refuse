/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { css } from "@emotion/css";

const Tokyo: NextPage = () => {
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
        <div className={styles.viewArea}>
          <div className={styles.paragraph}>
            <p>モノばかりが飽和するこの時代に、</p>
            <p>所属することに必死な人間たちに、</p>
            <p>幸せが何かを見出せるのだろうか。</p>
          </div>
        </div>
        <div className={styles.viewArea}>
          <div className={styles.paragraph}>
            <p>形骸化したいくつものライフイベントが、</p>
            <p>カテゴライズに躍起な多様性が、</p>
            <p>モジュール化された労働力が、</p>
            <p>物事を酷く簡素なものに変えてしまった。</p>
          </div>
        </div>
        <div className={styles.viewArea}>
          <div className={styles.paragraph}>
            <p>
              生まれてしまったのなら、
              <br />
              どう生きるべきだろうか。
            </p>
            <p>
              「労働力の、換えの効く一部として」
              <br />
              では余りにも悲しい。
            </p>
            <p>
              自分にしか分からなくても、
              <br />
              一心不乱に追い求められるものを。
            </p>
            <p>月明かりの様に煌々と暗闇を照らすものを。</p>
            <p>人生をかけて探したい。</p>
          </div>
        </div>
        <div className={styles.viewArea}>
          <p className={styles.paragraph}>
            そう自分に言い聞かせ、
            <br />
            排気ガス塗れの東京を歩く。
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src={`/backgroundImage.jpeg`}
            layout={`fill`}
            objectFit={`cover`}
          />
        </div>
      </div>
    </div>
  );
};

export default Tokyo;

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

  paragraph: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "90%",
    width: "90%",
    backgroundColor: "rgba(240, 240, 240, 0.7)",
  }),

  image: css({
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "-1",
  }),
};
