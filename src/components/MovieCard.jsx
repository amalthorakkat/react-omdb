import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center rounded-[30px] overflow-hidden shadow-lg  p-4  bg-conic from-white to-black to-60% ">
        <div className="w-48 h-64 overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>

        <div className=" text-center my-5  ">
          <h2 className="w-48 truncate font-semibold text-white">
            {movie.Title}
          </h2>
          <p className="text-[grey]">{movie.Year}</p>
          <button
            className=" mt-2 border border-white rounded-[30px] bg-amber-50 py-1 px-4 text-[15px] font-medium 
             hover:bg-amber-100 hover:border-amber-200 hover:scale-105 
             active:bg-amber-200 active:scale-95 
             transition-all duration-200 ease-in-out
             hover:cursor-pointer"

          >
            View
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
