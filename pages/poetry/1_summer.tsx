/** @jsxImportSource @emotion/react */

import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";

const Summer: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Poetry</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div css={main}>
        <h1 css={vertical}>思い出は半透明</h1>
      </div>
    </div>
  );
};

// 以下CSS

const main = css({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundColor: "#007bbb",
});

const vertical = css({
  writingMode: "vertical-lr",
});

export default Summer;
