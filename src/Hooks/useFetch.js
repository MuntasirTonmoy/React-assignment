import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  return { shows, setShows };
};

export default useFetch;
