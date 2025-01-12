import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Teachers from "./components/Teachers/Teachers";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Teachers />
      <Courses />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
