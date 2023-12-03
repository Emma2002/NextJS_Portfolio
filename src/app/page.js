import TopSection from "./components/TopSection"
import ImageGallery from "./components/ImageGallery"
import About from "./components/About"
import Work from "./components/workSection/Work"

export default function Home() {
  return (
    <>
      <TopSection/>
      <About/>
      <ImageGallery/>
      <Work/>
      </>
  );
}