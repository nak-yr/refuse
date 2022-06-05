import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import GearIcon from "@rsuite/icons/Gear";
import { client } from "../../libs/client";

import styles from "../../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

import Header from "../components/header";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
};

const Blog: NextPage = ({ blogs }) => {
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
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
