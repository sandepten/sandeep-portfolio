import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import MainProjects from "../components/MainProjects";
import Navbar from "../components/Navbar";
import OtherProjects from "../components/OtherProjects";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Sandepten</title>
        <meta name="description" content="Sandeep's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="px-6 xs:px-12 md:px-24 xl:px-36 2xl:mx-auto 2xl:w-3/5 2xl:px-0">
        <Dashboard />
        <About />
        <Work />
        <MainProjects />
        <OtherProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
