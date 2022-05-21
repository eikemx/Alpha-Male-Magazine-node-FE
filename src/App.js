import React, { useEffect, useState } from "react";
import client from "./contentful/client";
import "./index.css"

import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState()

useEffect(() => {

  setIsLoading(true);
  client
  .getEntries({
    content_type: "product" // content type is actually article 
  })
    .then((data) => {
      setArticles(data);
      setIsLoading(false);
    })
    .catch((e) => {
      console.log(e)
      setIsLoading(false);
      setIsError(true);
    });
},[]);

if (isError) {
  // console.log(isError)
  return <h1>Something's wrong!</h1>
}

if (isLoading) {
  return <p>Loading...</p>
}

// console.log(articles)

  return (
    <>
    <Header/>
    <About/>
    <Articles articles={articles.items}/>
    {/* <Tags articles={articles}/> */}
    {/* <Author /> */}
    <Footer/>
    </>
  );
}

export default App;
