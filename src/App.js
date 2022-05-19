import { useEffect, useState } from "react";
import client from "./contentful/client";
import "./index.css"

import Header from "./components/Header";
import Footer from "./components/Footer"

const App = () => {

useEffect(() => {
  client
  .getEntries()
  .then((data) => console.log(data))
},[]);
  
  return (
    <>
    <Header/>
    <h1>contentful blog</h1>
    
    <Footer/>
    </>
  );
}

export default App;
