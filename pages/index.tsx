import type { NextPage } from "next";
import Head from "next/head";
import { Col, Panel, Row } from "rsuite";

import styles from "../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

import Header from "./components/header";
import Link from "next/link";

/*------------ スマホ実機で想定通りにいかないので要検討 ------------*/
if (process.browser) {
  // スマホならtrue, PCならfalse
  const isSP = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);

  // DOMの読み込みが完了したら、表示領域の高さを自動更新する処理を実行する
  document.addEventListener("resize", () => {
    // 端末がスマホなら
    if (isSP) {
      // CSS変数 --outer-height に outerHeight px を代入
      document.documentElement.style.setProperty(
        "--outer-height",
        `${window.outerHeight}px`
      );
    }
  });
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Refuse</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className={styles.main}
        style={{ alignItems: "center", alignSelf: "center" }}
      >
        <h1>Refuse</h1>
        <hr
          style={{
            width: "100%",
            borderTop: "0.5vh double",
          }}
        />
        <p style={{ margin: "5vh" }}>
          今日の悩みが、苦しみが、楽しさが、いつかの糧になればいい。
        </p>
        <Row style={{ width: "100%" }}>
          <Col xs={12}>
            <Panel
              header={
                <Link href="/poetry" passHref>
                  <a>Poetry</a>
                </Link>
              }
              bordered
            >
              テーマを決めて視覚と文字で作品のようなものを作り、載せる場所
            </Panel>
          </Col>
          <Col xs={12}>
            <Panel
              header={
                <Link href="/blog" passHref>
                  <a>Blog</a>
                </Link>
              }
              bordered
            >
              感じたことや考えたことを忘れないように、書き留めておく場所
            </Panel>
          </Col>
        </Row>
      </main>

      {/*<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
  </footer>*/}
    </div>
  );
};

export default Home;
