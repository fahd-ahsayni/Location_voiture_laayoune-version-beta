import React from "react";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import CategoriesSection from "../components/CategoriesSection";
import AdsSection from "../components/AdsSection";
import Contact from "../components/Contact";
import Modal from "../components/global/Modal";
import Footer from "../components/Footer";
import CardReservation from "../components/global/CardReservation";
import { useSelector } from "react-redux";
import Condition from "../components/Condition";
import ModelConfirmation from "../components/global/ModelConfirmation"

const Home = () => {
  const confermation  = useSelector(state => state.confirmation)
  return (
    <div className="overflow-x-hidden">
      {confermation && <ModelConfirmation />}
      <HeroSection />
      <Features />
      <CategoriesSection />
      {/* <Testimonials /> */}
      <AdsSection />
      <Condition />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
