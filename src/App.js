import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: `url(${require("./assets/carousel-bkg.png")})`,
      }}
    >
      {/* Header */}
      <Header isScrolled={isScrolled} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

{
  /* <div className="text-darkestGreen p-6">
  <h1 className="font-poppins text-5xl">
    VEHICLE_BAZAR_MANAGEMENT_SYSTEM
  </h1>
  <p className="font-poppins text-3xl text-darkGreen">
    VEHICLE_BAZAR_MANAGEMENT_SYSTEM
  </p>
  <p className="font-arial text-xl text-mediumGreen">
    VEHICLE_BAZAR_MANAGEMENT_SYSTEM
  </p>
  <p className="font-arial text-xl text-lightGreen">
    VEHICLE_BAZAR_MANAGEMENT_SYSTEM
  </p>
</div> */
}
