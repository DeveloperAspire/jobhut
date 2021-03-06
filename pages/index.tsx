import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Feature from "../components/Features";
import Interface from "../components/Interface";
import Info from "../components/Info/index";
import Team from "../components/Team";
import Customers from "../components/Customers";
import Blog from "../components/Blog";
import Footer from "../components/Footer/index";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Job Hut</title>
        <meta name="description" content="Job Hut | Home" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </Head>

      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Interface />
      <Info />
      <Team />
      <Customers />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
