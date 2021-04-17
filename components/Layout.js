import Head from "next/head";
import Link from "next/link";
import ActiveLink from "./ActiveLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            <div className="text-2xl text-purple-500">
              <Link href="/">Brenoco's</Link>
            </div>
            <AppNav />
          </div>
        </header>
        <main className="w-11/12 md:w-full max-w-2xl mx-auto my-8 flex-grow">
          {children}
        </main>
        <footer className="flex flex-col items-center w-full h-24 border-t border-purple-500">
          <section className="m-auto flex flex-col justify-center">
            <nav className="flex flex-row justify-center mb-2">
              <a
                className="mr-6 hover:text-gray-500"
                href="https://github.com/obrenoco"
                target="_blank"
              >
                <FaGithub size={24} />
              </a>
              <a
                className="mr-6 hover:text-gray-500"
                href="https://www.linkedin.com/in/brenoromeiro/"
                target="_blank"
              >
                <FaLinkedin size={28} />
              </a>
            </nav>
            <nav>Blog do brenoco | {yearRange}</nav>
          </section>
        </footer>
      </div>
    </>
  );
}

function AppNav() {
  return (
    <nav className="text-2xl text-gray-600">
      <ActiveLink href="/" activeClassName="text-purple-500">
        <a className="hover:text-purple-500">Blog</a>
      </ActiveLink>
      <ActiveLink href="/about" activeClassName="text-purple-500">
        <a className="hover:text-purple-500 ml-4">Sobre</a>
      </ActiveLink>
    </nav>
  );
}

export default Layout;
