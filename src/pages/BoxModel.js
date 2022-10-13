import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CSSBoxModel from "../components/CSSBoxModel"
const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <CSSBoxModel/>
      <Footer />
    </div>
  );
};

export default Home;
