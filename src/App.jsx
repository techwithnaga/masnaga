import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Tech from "./components/tech/Tech";
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Intro></Intro>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;
