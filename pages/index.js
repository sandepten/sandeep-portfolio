import Head from "next/head";
import Image from "next/image";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OtherProjects from "../components/OtherProjects";

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
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  );
}
