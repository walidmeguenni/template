import React from "react";
import Nav from "../components/nav";
import Main from "../sections/main";
import About from "../sections/about";
import Features from "../sections/feature.jsx";
import Work from "../sections/works";
import Pricing from "../sections/pricing";
import Testimonials from "../sections/testimonials";
import FAQ from "../sections/FAQ";
import Footer from "../sections/fotter";

const Home = () => {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Features />
      <Work />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
};

export { Home };
