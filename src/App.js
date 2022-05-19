import { useEffect, useState } from "react";
import client from "./contentful/client";
import "./index.css"

const App = () => {

useEffect(() => {
  client
  .getEntries()
  .then((data) => console.log(data))
},[]);
  
  return (
    <h1>contentful blog</h1>

  );
}

export default App;
