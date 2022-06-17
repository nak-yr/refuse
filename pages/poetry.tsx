import type { NextPage } from "next";
import Head from "next/head";
import { List, FlexboxGrid, Placeholder } from "rsuite";

import styles from "../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

import Header from "./components/header";

interface PoetryEntry {
  date: string;
  title: string;
}

const dummyEntry: PoetryEntry[] = [
  {
    date: "yyyy-mm-dd",
    title: "test content1",
  },
  {
    date: "yyyy-mm-dd",
    title: "test content2",
  },
  {
    date: "yyyy-mm-dd",
    title: "test content3",
  },
];

const Poetry: NextPage = () => {
  const { Paragraph } = Placeholder;

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
        <List hover style={{ width: "90%" }}>
          {dummyEntry.map((dummy, index) => (
            <List.Item key={index}>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={6}>
                  {/* タイトルだけ親要素のフォントサイズの1.5倍で表示する */}
                  <div style={{ fontSize: "1.5em" }}>{dummy.title}</div>
                  <div>{dummy.date}</div>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={18}>
                  {/* Prop `style` did not match が出るけど、Paragraphはテストにしか使わないので一旦無視で */}
                  <Paragraph />
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
