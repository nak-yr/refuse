import { client } from "../../libs/client";
import { useRouter } from "next/router";
import Header from "../components/header";
import Head from "next/head";

import styles from "../../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

export default function BlogID({ blog }: { blog: any }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // router.isFallbackがtrueの間はprops(blog)は未定義のため、if文の後に下記処理を記載
  const fullPublishDate: Date = new Date(Date.parse(blog.publishedAt));
  const publishDate: string =
    fullPublishDate.getFullYear() +
    "/" +
    (fullPublishDate.getMonth() + 1) +
    "/" +
    fullPublishDate.getDate() +
    " ";

  return (
    <div className={styles.container}>
      <Header />
      <Head>
        <title>Blog: {blog.title}</title>
        <meta
          name="description"
          content="A website created with the desire to be an artist."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.articles_main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p>published at : {publishDate}</p>
        <hr style={{ width: "100%" }} />
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);

  return { paths, fallback: true };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
    revalidate: 10,
  };
};
