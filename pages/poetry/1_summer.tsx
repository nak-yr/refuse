/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { css, keyframes } from "@emotion/react";

const MainParagraph = () => {
  return (
    <>
      <p>
        今年も夏がやってくる。あのやたらと深い蒼をした、ノスタルジーの塊がやってくる。
      </p>
      <p>失ったものが想起され、また一つ失う季節がやってくる。</p>
      <p>届かないものに思いを馳せ、また今日も思い出を辿る。</p>
      <br />
      <br />
      <p>夏の暑さはどうにも苦手だ。</p>
      <p>でも窓の外に見えるあの空の蒼さは、どうしても嫌いになれない。</p>
      <p>それはきっと思い出と同じだ。</p>
      <p>一歩引いた場所から俯瞰すればかくも美しく見えるのだ。</p>
      <p>
        窓の外に覗く藍の空の様な、思い出の様な、どうにもできなくて綺麗なものを創りたい。
      </p>
    </>
  );
};

const Summer: NextPage = () => {
  return (
    <div css={wrapper}>
      <Head>
        <title>Poetry</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={main}>
        <h1 css={vertical}>夏が来る。</h1>
        <div css={paragraph}>
          <MainParagraph />
        </div>
      </div>
    </div>
  );
};

// 以下CSS

const wrapper = css({
  display: "flex",
  height: "100vh",
  width: "100vw",
  justifyContent: "center",
  backgroundColor: "#007bbb",
});

// ページ読み込み時のフェードイン動作をkeyframesで定義
const fadein = keyframes({
  from: {
    opacity: "0",
    transform: "translateY(20px)",
  },
  to: {
    opacity: "1",
    transform: "translateY(0)",
  },
});

const main = css({
  display: "flex",
  flexDirection: "row-reverse",
  height: "100%",
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  background: "linear-gradient(0deg, #6aa4c2, white)",
  WebkitBackgroundClip: "text",
  animation: `${fadein} 1s ease-out both`,
});

const vertical = css({
  writingMode: "vertical-lr",
  fontSize: "2em",
  letterSpacing: "1em",
  WebkitTextFillColor: "transparent",
});

const paragraph = css({
  fontSize: "1em",
  WebkitTextFillColor: "transparent",
});

export default Summer;
