import { client } from "../../libs/client";

import styles from "../../styles/Home.module.css";
import "rsuite/dist/rsuite.min.css";

export default function BlogID({ blog }: { blog: any }) {
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

  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
