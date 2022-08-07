import Image from "next/image";
import { client } from "../../libs/client";
import { useRouter } from "next/router";
import parse, {
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";

import Header from "../components/header";
import Head from "next/head";

import styles from "../../styles/blogs.module.css";
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

  // html-react-perserを用いてHTMLをReactElementsにパースする際のオプション定義部分
  // 基本的にmicroCMS APIからの応答はpタグでWrapされてくるので、必要のないpタグは取り除く処理をしている
  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      /*if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name === "p"
      ) {
        return <p {...domNode.attribs}>{domToReact(domNode.children)}</p>;
      }*/
      if (
        domNode instanceof Element &&
        domNode.children[0] instanceof Element &&
        domNode.attribs &&
        domNode.children[0].name === "img"
      ) {
        return (
          <div className={styles.imageContainer}>
            <Image
              src={domNode.children[0].attribs.src}
              layout="fill"
              objectFit="contain"
            />
          </div>
        );
      }
      if (
        domNode instanceof Element &&
        domNode.children[0] instanceof Element &&
        domNode.attribs &&
        domNode.children[0].name === "br"
      ) {
        return <br />;
      }
    },
  };

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
      <main className={styles.main}>
        <h1 className={styles.title}>{blog.title}</h1>
        <p>published at : {publishDate}</p>
        <hr style={{ width: "100%" }} />
        {/* APIで取得した本文のHTMLを整形し、パースする */}
        <div className={styles.contents}>{parse(blog.content, options)}</div>
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
