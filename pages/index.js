import Head from "next/head";
import Image from "next/image";
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
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Navbar />
      <Dashboard />
      <About />
      <Work />
      <MainProjects />
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  );
}
