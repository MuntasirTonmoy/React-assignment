import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="text-center text-2xl p-5 bg-gray-100 font-semibold uppercase">
        <Link to="/">Tv Shows</Link>
      </div>
    </>
  );
};

export default Navbar;
