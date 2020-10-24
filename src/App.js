import React from "react";
import Home from "./containers/home";
import "./styles.css";
import header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <header />
      <Home />
    </div>
  );
}
