/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";

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
        <div>
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

const main = css({
  display: "flex",
  flexDirection: "row-reverse",
  height: "100%",
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
});

const vertical = css({
  writingMode: "vertical-lr",
});

export default Summer;
