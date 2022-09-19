/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { SketchFireworks } from "./sketchfireworks";
import { css, keyframes } from "@emotion/css";

const Fireworks: NextPage = () => {
  const Paragraph = () => {
    // 画面に表示する文章の配列
    const words: string[] = [
      "祭囃子から少し離れて、仄暗い川辺に座っていた。",
      "足元には彼岸花。夏ももう終わるのだろうか。",
      "ふと頭上で、大輪の花が炸裂する。",
      "花火だ。",
      "いつか花火を見た時は、隣に誰かが居た、のだっけ。",
      "空に咲く花弁の鮮やかさだけが強く思い出される。",
      "僕にはかつて誰かが居た。",
      "それ以上に大事なものなどなかったというのに。",
      "あの日から、視界に映るもの全て色を失った。",
      "今も空に浮かんでは消えていく花火は、悔しいほどに綺麗なまま。",
      "僕は今、どんな顔をしているのだろう。",
    ];
    // フェードインの開始を各行で１秒ずつ遅らせて表示する
    return (
      <div className={styles.main}>
        {words.map((word: string, index: number) => (
          <p
            key={index}
            className={styles.paragraph}
            style={{ animationDelay: `${1 + 1 * index}s` }}
          >
            {word}
          </p>
        ))}
      </div>
    );
  };

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
        <Paragraph />
        <SketchFireworks />
      </div>
    </div>
  );
};

export default Fireworks;

const fadein = keyframes({
  from: {
    opacity: "0",
    transform: "translateY(-20px)",
  },
  to: {
    opacity: "1",
    transform: "translateY(0)",
  },
});

const styles = {
  wrapper: css({
    display: "flex",
    height: "100vh",
    width: "100vw",
    justifyContent: "center",
  }),

  main: css({
    display: "flex",
    flexDirection: "row-reverse",
    alignContent: "center",
    alignItems: "flex-end",
    justifyContent: "end",
    overflowX: "scroll",
    flexWrap: "nowrap",
  }),

  paragraph: css({
    marginTop: "10vmin",
    marginBottom: "10vmin",
    marginLeft: "5vmin",
    marginRight: "5vmin",
    writingMode: "vertical-rl",
    color: "white",
    justifyContent: "end",
    animation: `${fadein} 1s ease-out both`,
  }),
};
