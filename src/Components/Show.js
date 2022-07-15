import React from "react";
import { useNavigate } from "react-router-dom";

const Show = ({ showList }) => {
  const { name, image, id, rating } = showList?.show;
  const { medium } = image;
  const navigate = useNavigate();

  return (
    <div className="card max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={medium} alt={name} />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="text-center text-xl font-semibold">{name}</h2>
        <p className="text-center mb-1 text-lg">
          Score: {(showList.score * 10).toFixed(1)}
        </p>
        <div className="card-actions">
          <button
            onClick={() => navigate(`/showdetails/${id}`)}
            className="btn btn-sm btn-primary text-white"
          >
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Show;
