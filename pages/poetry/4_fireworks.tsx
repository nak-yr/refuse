/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { css, cx } from "@emotion/css";

import dynamic from "next/dynamic";
import p5Types from "p5";

const Y_AXIS = 1;
const X_AXIS = 2;

// Nextjsでp5jsを利用するためのWindow周りの設定
const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

class Firework {
  x: number;
  y: number;
  vx: number;
  vy: number;
  fireHeight: number;

  constructor() {
    this.y = 480;
    this.fireHeight = 480 - 100;
    this.vy = 20;
  }
  fire(p5: p5Types) {
    p5.color(255);
    p5.ellipse(240, this.y, 20, 20);

    this.y -=
      this.vy * ((this.fireHeight - (p5.height - this.y)) / this.fireHeight);

    if (this.y < 100.001) {
      this.y = 480;
    }
  }
}

// p5jsでの各関数をTypeScriptで解釈できるように記載
// 花火を描きたい ここを参考にTSに落とし込み中 https://qiita.com/iNaoki04/items/5d420440cf3d89f54f82
export const SketchComponet = () => {
  let fw: Firework;

  const preload = (p5: p5Types) => {};

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight)
      .parent(canvasParentRef)
      .style("z-index", "-1")
      .position(0, 0);
    p5.frameRate(60);
    p5.colorMode("rgb");
    fw = new Firework();
    p5.noStroke();
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    fw.fire(p5);
  };

  // コンポーネントのレスポンシブ化
  const windowResized = (p5: p5Types) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      windowResized={windowResized}
    />
  );
};

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
        <SketchComponet />
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
