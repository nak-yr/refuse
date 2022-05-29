import type { NextPage } from "next";
import Head from "next/head";
import GearIcon from "@rsuite/icons/Gear";

import styles from "../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

import Header from "./components/header";

const Blog: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <b>
          <GearIcon spin />
          under construction
          <GearIcon spin />
        </b>
      </div>
    </div>
  );
};

export default Blog;
