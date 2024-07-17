"use client"
import Head from 'next/head'
import TopSection from "./components/TopSection"
import ImageGallery from "./components/ImageGallery"
import About from "./components/About"
import Work from "./components/workSection/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.jsx"; 


export default function Home() {
  return (
    <>
    <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
     <NavBar />
      <TopSection/>
      <About/>
      <ImageGallery/>
      <Work/>
      <Contact/>
      <Footer/>
      </>
  );
}