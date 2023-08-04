import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Tech from "./components/tech/Tech";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Intro></Intro>
      <Tech></Tech>
    </div>
  );
}

export default App;
