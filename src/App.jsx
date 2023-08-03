import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  );
}

export default App;
