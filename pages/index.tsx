import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Timeline } from "rsuite";

import styles from "../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

import Header from "./components/header";

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
      <main className={styles.main}>
        <h1>Refuse</h1>
        <hr />
        <Timeline>
          <Timeline.Item>Thank you for visiting here.</Timeline.Item>
          <Timeline.Item>
            This website, was named &quot;Refuse&quot;, is under construction.
          </Timeline.Item>
          <Timeline.Item>I will put here some poetry and blog.</Timeline.Item>
          <Timeline.Item>I hope you will come here again.</Timeline.Item>
        </Timeline>
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
