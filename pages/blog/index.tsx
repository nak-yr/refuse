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

const Blog: NextPage = ({ blogs }: { blogs?: any }) => {
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

      <div className={styles.main} style={{ alignItems: "start" }}>
        <ul style={{ listStyle: "none", width: "100%" }}>
          {blogs.map((blog: any) => (
            <li key={blog.id} style={{ borderBottom: "1px solid" }}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <p>
                {new Date(Date.parse(blog.publishedAt)).getFullYear() +
                  "/" +
                  new Date(Date.parse(blog.publishedAt)).getMonth() +
                  "/" +
                  new Date(Date.parse(blog.publishedAt)).getDate()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
