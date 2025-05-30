import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import MainProjects from "../components/MainProjects";
import Navbar from "../components/Navbar";
import OtherProjects from "../components/OtherProjects";
import Work from "../components/Work";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Analytics />
      <Head>
        <title>Sandepten</title>
        <meta name="description" content="Sandeep's portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="w-full px-6 xs:px-8 md:px-12 lg:px-16 xl:px-20 2xl:max-w-7xl 2xl:mx-auto">
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
