import type { NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Feature from "../components/Features";
import Interface from "../components/Interface";
import Info from "../components/Info/index"
import Team from "../components/Team";
import Customers from "../components/Customers";
import Blog from "../components/Blog";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero/>
      <About/>
      <Feature/>
      <Interface />
      <Info />
      <Team />
      <Customers />
      <Blog />

    </div>
  );
};

export default Home;
