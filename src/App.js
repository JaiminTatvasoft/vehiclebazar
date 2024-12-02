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
      className=" bg-cover bg-center top-0 left-0 bg-no-repeat min-h-screen"
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
