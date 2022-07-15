import React from "react";

const Show = ({ showList }) => {
  const { name, image } = showList?.show;
  const { medium } = image;

  console.log(showList.show);
  return (
    <div class="card max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src={medium} alt={name} />
      </figure>
      <div class="card-body mx-auto">
        <h2 class="text-center text-xl font-semibold">{name}</h2>
        <p className="text-center mb-1 text-lg">
          Score: {Math.round(showList.score * 10)}
        </p>
        <div class="card-actions">
          <button class="btn btn-sm btn-primary text-white">
            Show Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Show;
