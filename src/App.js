import { useEffect, useState } from "react";
import client from "./contentful/client";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  useEffect(() => {
    client.getEntries().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <Hero/>
    </>
  );
};

export default App;
