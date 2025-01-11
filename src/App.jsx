import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Teachers from "./components/Teachers/Teachers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Teachers />
    </div>
  );
};

export default App;
