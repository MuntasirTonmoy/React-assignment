import React, { useEffect, useState } from "react";
import Show from "./Show";

const Shows = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=all`)
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);

  console.log(shows);
  return (
    <div className="lg:grid grid-cols-4 lg:gap-10 p-10">
      {shows?.map((showList) => {
        return (
          <Show
            showList={showList}
            key={showList.show.id}
            className="text-2xl"
          ></Show>
        );
      })}
    </div>
  );
};

export default Shows;
