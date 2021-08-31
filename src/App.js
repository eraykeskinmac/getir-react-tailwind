import Campaigns from "components/Campaigns";
import Cards from "components/Cards";
import Categories from "components/Categories";
import Favorites from "components/Favorites";
import Footer from "components/Footer";
import Header from "components/Header";
import HeroSection from "components/HeroSection";
import MobileApp from "components/MobileApp";




function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Campaigns />
      <Cards />
      <Categories />
      <Favorites />
      <Footer /> 
      <MobileApp />
    </>
  );
}

export default App;
