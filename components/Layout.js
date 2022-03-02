import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

function Layout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Digidex | {pageTitle}</title>
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
