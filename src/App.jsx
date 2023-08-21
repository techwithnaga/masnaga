import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import AboutMe from "./components/aboutMe/AboutMe";
import Qualification from "./components/qualification/Qualification";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Qualification></Qualification>
      <Portfolio></Portfolio>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
