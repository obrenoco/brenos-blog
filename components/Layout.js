import Head from "next/head";
function Layout({ children, pageTitle }) {
  const currentYear = new Date().getFullYear();
  const yearRange =
    currentYear === 2021 ? currentYear : `2021 - ${currentYear}`;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className="w-full h-16 border-b border-purple-500 flex items-center justify-center">
          <div className="w-11/12 md:w-full max-w-3xl flex flex-row justify-between">
            <div className="text-2xl text-purple-500">My Blog</div>
            <nav className="text-2xl text-gray-600">Blog</nav>
          </div>
        </header>
        <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
          {children}
        </main>
        <footer className="flex flex-col items-center w-full h-24 border-t border-purple-500">
          <section className="w-11/12 md:w-full max-w-3xl m-auto flex flex-row items-center justify-center">
            Blog do brenoco | {yearRange}
          </section>
        </footer>
      </div>
    </>
  );
}
export default Layout;
