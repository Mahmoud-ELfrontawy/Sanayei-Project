import Button from "./Button";
import CardsRow from "../pages/CardsRow";
import "./Header";
import imageHome from "../sanayei-img/home.jpg";
import "./Home.css";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
<<<<<<< HEAD
import CraftsmenSection from "./CraftsmenSection";
import RequestServiceSection from "./RequestServiceSection";

function Home() {
  return (
    <section className="home">
      <div className="image-home">
        <img src={imageHome} alt="Home" className="image-home__img" />
        <div className="image-home__overlay" />
        <div className="image-home__content">
          <h1>اطلب صنايعك... وخلي الشغل علينا!</h1>
          <p>مع صنايعي هتلاقي كل خدمات الصيانة والدِيكور في مكان واحد -</p>
          <p className="text-white">
            {" "}
            صنايعية خبرة، أسعار واضحة، وشغل مضمون يوصل لحد بابك.
          </p>
          <Button />
        </div>
      </div>
      <CardsRow />
      <AboutSection />
      <ServicesSection />
      <CraftsmenSection />
      <RequestServiceSection />
    </section>
  );
=======
import Footer from "./Footer";

function Home() {
    return (
        <section className="home">
            <div className="image-home">
                <img src={imageHome} alt="Home" className="image-home__img" />
                <div className="image-home__overlay" />
                <div className="image-home__content">
                    <h1>اطلب صنايعك... وخلي الشغل علينا!</h1>
                    <p>مع صنايعي هتلاقي كل خدمات الصيانة والدِيكور في مكان واحد -</p>
                    <p className="text-white"> صنايعية خبرة، أسعار واضحة، وشغل مضمون يوصل لحد بابك.</p>
                    <Button/>
                </div>
            </div>
            <CardsRow/>
            <AboutSection/>
            <ServicesSection/>
            <Footer/>
        </section>
    );
>>>>>>> 0d5dc4df6d27331a4828776425aa5876ac32e8d7
}

export default Home;
