import Layout from "../components/Layout";

function About() {
  return (
    <Layout pageTitle="About | My Blog">
      <article className="prose max-w-none">
        <h2 className="text-white">Breno Romeiro</h2>
        <p>Hello, I'm a blogger and I blog about interesting things.</p>
      </article>
    </Layout>
  );
}
export default About;
