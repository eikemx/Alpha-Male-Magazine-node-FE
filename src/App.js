import React, { useEffect, useState } from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom";
import serverURL from "./serverURL";
import "./index.css";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import AllArticles from "./components/AllArticles";
import Articles from "./components/Articles";
import Article from "./components/Article";
import About from "./components/About";
import Authors from "./components/Authors";
import Author from "./components/Author";
import Footer from "./components/Footer";
import FooterSubmitted from "./components/FooterSubmitted";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  const [articles, setArticles] = useState([]);
  // const [authors, setAuthors] = useState();

  useEffect(() => {
    // setIsLoading(true);
    const fetchArticles = async () => {
      const data = await fetch(`${serverURL}/api/alpha/articles`);
      const json = await data.json();
      setArticles(json);
    };
    fetchArticles();
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }

  return (
    <>
      <div className="app-body">
        <Header />
        <Hero />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                {/* <Tags tags={tags}/> */}
                <Articles articles={articles} />
                <Link to={`/articles`} className="article-link">
                  See all articles
                </Link>
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Footer />} />
            <Route path="submitted" element={<FooterSubmitted />} />
          </Route>

          <Route
            path="/articles"
            element={
              <>
                {/* <Tags tags={tags}/> */}
                <AllArticles articles={articles} />
                {/* <Link to={`/authors`} className="article-link">
                  See all authors
                </Link> */}
              </>
            }
          />

          <Route
            path="/article/:articleID"
            element={
              <>
                {/* <Tags tags={tags}/> */}
                <Article articles={articles} />
              </>
            }
          />
          <Route path="/authors" element={<Authors />} />
          <Route path="/author/:authorID" element={<Author />} />
          {/* <Route 
          path='/topic/:tagId'
          element={
          <>
            <Tags tags={tags}/>
            <ArticlesByTags articles={articles} setSelectedTag={setSelectedTag}/>
          </>
          }
        /> */}
        </Routes>
      </div>
    </>
  );
};

export default App;
