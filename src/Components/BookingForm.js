import React, { useState } from "react";
import useFetch from "../Hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { shows } = useFetch();
  const selected = shows?.find((showList) => showList.show.id === +id);
  const name = selected?.show?.name;
  const genres = selected?.show?.genres;
  const language = selected?.show?.language;
  const score = selected?.score;
  const [confirm, setConfirm] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const userInfo = [{ name, email }];
    const check = localStorage.getItem("userInfo");
    if (check) {
      const obj = JSON.parse(check);
      const isUserExist = obj.find((e) => e.email === email);
      if (isUserExist) {
        console.log("user-exist");
      } else {
        const newUser = [...obj, { name, email }];
        localStorage.setItem("userInfo", JSON.stringify(newUser));
      }
    } else {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
    e.target.reset();
    setConfirm(true);
  };

  return (
    <>
      {confirm ? (
        <>
          <div className="text-center  my-10 text-2xl bg-green-500 lg:w-1/5 lg:mx-auto mx-5 text-white p-5 rounded">
            Thank You for booking.
          </div>
          <div
            onClick={() => navigate("/")}
            className="text-center my-10 text-2xl bg-blue-500 lg:w-1/5 lg:mx-auto mx-5 text-white p-5 rounded cursor-pointer"
          >
            Go to Home
          </div>
        </>
      ) : (
        <form
          onSubmit={handleOnSubmit}
          className="max-w-lg mx-auto py-10 lg:px-0 px-5"
        >
          <div className="text-center bg-blue-50 rounded py-5 mb-3">
            <p className="text-2xl font-bold mt-2">Name: {name}</p>
            <p className="mt-2">
              Genre: {genres?.toString()} | Language: {language} | Score:{" "}
              {(score * 10).toFixed(1)}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">
              Confirm Booking
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default BookingForm;
