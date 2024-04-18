"use client"
import TopSection from "./components/TopSection"
import ImageGallery from "./components/ImageGallery"
import About from "./components/About"
import Work from "./components/workSection/Work"
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopSection/>
      <About/>
      <ImageGallery/>
      <Work/>
      <Contact/>
      <Footer/>
      </>
  );
}