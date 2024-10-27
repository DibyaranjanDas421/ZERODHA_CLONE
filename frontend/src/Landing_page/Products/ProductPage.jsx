import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import kite from "../../assets/media/images/kite.png";
import product_icon from "../../assets/media/images/coin.png";
import varsity from "../../assets/media/images/varsity.png";
import console from "../../assets/media/images/console.png";
import kite_connect from "../../assets/media/images/kiteconnect.png";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl={kite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo=""
        learnMore=""
        googlePlay=""
        appStore=" "
      />
      <RightSection
        imageUrl={console}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageUrl={product_icon}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
        learnMore=""
        googlePlay=""
        appStore=" "
      />
      <RightSection
        imageUrl={kite_connect}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageUrl={varsity}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        trydemo=""
        learnMore=""
        googlePlay=""
        appStore=" "
       />
       <h5 className="text-center fs-5 text-muted" style={{marginTop:"8rem"}}>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech blog.</a> </h5>

      <Universe />
    </>
  );
}

export default ProductPage;
