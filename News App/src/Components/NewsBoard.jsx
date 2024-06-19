import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7f8bbe7c05c64f73a4ed462b5e5b1d57`
    )
      .then((response) => response.json())
      .then((res) => {
        setState(res.articles);
        console.log(res);
      })
      .catch((err) => setHasError(true));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {state &&
        state.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
    </>
  );
};

export default NewsBoard;
