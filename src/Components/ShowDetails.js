import React from "react";
import useFetch from "../Hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const ShowDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { shows } = useFetch();
  const selected = shows?.find((showList) => showList.show.id === +id);
  const name = selected?.show?.name;
  const genres = selected?.show?.genres;
  const language = selected?.show?.language;
  const score = selected?.score;

  const summary = selected?.show?.summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="hero h-[calc(100vh-75px)] bg-base-100 px-5 lg:py-0 py-5">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={selected?.show?.image?.original}
          className="lg:max-w-sm  rounded-lg shadow-2xl"
          alt={name}
        />
        <div className="lg:mb-auto lg:ml-10 lg:mt-0 mt-3">
          <h1 className="text-5xl font-bold mb-5">{name}</h1>
          <p className="mb-5">Genre: {genres?.toString()}</p>
          <p className="mb-5">Language: {language}</p>
          <p className="mb-5">Score: {(score * 10).toFixed(1)}</p>
          <p className="mb-5">Summary: {summary}</p>
          <button
            onClick={() => navigate(`/booking/${id}`)}
            className="lg:mt-8 mt-2 lg:mb-0 mb-5 btn btn-primary lg:w-[400px] w-full text-white"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
