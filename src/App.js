import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import { useDispatch } from "react-redux";
import { fetchComponents } from "./redux/componentSlice";

const App = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    dispatch(fetchComponents());
  }, [dispatch]);

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
    <>
      <Header isScrolled={isScrolled} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
