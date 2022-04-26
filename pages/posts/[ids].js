import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export const getStaticProps = async ({ params }) => {
  const postDat = await getPostData(params.ids);
  return {
    props: {
      postDat,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

const Post = ({ postDat }) => {
  return (
    <Layout>
      <Head>
        <title>{postDat.title}</title>
      </Head>

      <h1 className={utilStyles.hadingX1}>{postDat.title}</h1>
      {postDat.ids == "ssg-ssr" && (
        <>
          <p>Fuck you nelly</p>
        </>
      )}
      <div className={utilStyles.lightText}>
        <Date dateString={postDat.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postDat.contentHtml }} />
    </Layout>
  );
};
export default Post;
