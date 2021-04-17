import { postSlugs, postForSlug } from "../../posts";

import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import ReactMarkdown from "react-markdown";

const Post = ({ frontmatter, body }) => {
  if (!frontmatter) return <></>;

  return (
    <Layout pageTitle={frontmatter.title}>
      <div className="w-full">
        <article className="max-w-none">
          <h1 className="text-2xl font-semibold mb-4">{frontmatter.title}</h1>
          <p className="italic mb-4">{frontmatter.date}</p>
        </article>
      </div>
      <section className="prose">
        <ReactMarkdown source={body} renderers={{ code: CodeBlock }} />
      </section>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { frontmatter, body } = await postForSlug(params.post);

  return {
    props: {
      frontmatter,
      body,
    },
  };
}

export async function getStaticPaths() {
  const paths = postSlugs().map((slug) => `/blog/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default Post;
