import React from "react";
import Header from "../../Components/User/Header.jsx";
import Banner from "../../Components/User/Banner.jsx";
import CardsLayout from "../../Components/User/CardsLayout.jsx";
import Footer from "../../Components/User/Footer.jsx";
const Home = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <Banner />
      </div>
      <div className="">
        <CardsLayout />
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
