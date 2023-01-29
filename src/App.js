import React, { useState, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
import Faq from "./components/UI/Faq";
import Testimonials from "./components/UI/Testimonials";
import Newsletter from "./components/UI/Newsletter";
import Footer from "./components/UI/Footer";
import Contact from "./components/UI/Contact";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Faq />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
      {/* <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
