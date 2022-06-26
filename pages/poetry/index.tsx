import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { List, FlexboxGrid, Placeholder } from "rsuite";

import styles from "../../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

import Header from "../components/header";

interface PoetryEntry {
  date: string;
  title: string;
  link: string;
  description: string;
}

// 投稿エントリの情報を格納した配列を定義
const entry: PoetryEntry[] = [
  {
    date: "2022-06-26",
    title: "夏",
    link: "/poetry/1_summer",
    description: "最初の作品",
  },
];

const Poetry: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poetry</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={styles.main}>
        <List style={{ width: "90%" }}>
          {entry.map((ent, index) => (
            <List.Item key={index}>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={6}>
                  {/* タイトルだけ親要素のフォントサイズの1.5倍で表示する */}
                  <div style={{ fontSize: "1.5em" }}>
                    <Link href={ent.link} passHref>
                      <a>{ent.title}</a>
                    </Link>
                  </div>
                  <div>{ent.date}</div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={18}>
                  {ent.description}
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Poetry;
