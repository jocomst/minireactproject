import Carousel from "./Components/Splash page/ImgCarousel";
import NavBar from "./Components/NavBar";
import { carouselImages } from "./Components/Splash page/carouselHelpers";
import Footer from "./Components/Footer";
import FrontProductDisplay from "./Components/Splash page/FrontProductDIsplay";
const SplashPage = ({ prodArrIndex, cartedItems }) => {
  return (
    <>
      <NavBar cartedItems={cartedItems} />
      <Carousel imgs={carouselImages} />
      <FrontProductDisplay prodArrIndex={prodArrIndex} />
      <Footer />
    </>
  );
};

export default SplashPage;
