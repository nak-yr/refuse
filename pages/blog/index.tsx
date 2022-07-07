import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
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
    revalidate: 10,
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
        <ul style={{ listStyle: "none", width: "100%", padding: "0" }}>
          {blogs.map((blog: any) => (
            <li
              key={blog.id}
              style={{ borderBottom: "1px solid", margin: "2vh" }}
            >
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <p>
                {new Date(Date.parse(blog.publishedAt)).getFullYear() +
                  "/" +
                  (new Date(Date.parse(blog.publishedAt)).getMonth() + 1) +
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
