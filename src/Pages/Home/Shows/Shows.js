import React, { useEffect, useState } from "react";

const Shows = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  console.log(shows);
  return (
    <div>
      {shows?.map((showList) => {
        return <li key={showList.show.id}>{showList.show.name}</li>;
      })}
    </div>
  );
};

export default Shows;
