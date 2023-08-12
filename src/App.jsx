import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import Qualification from "./components/qualification/Qualification";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Qualification></Qualification>
    </div>
  );
}

export default App;
