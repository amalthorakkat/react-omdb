
import React, { useState } from "react";
import Search from "../assets/search.png";
import axiosInstance from "../config/axiosConfig";
import MovieCard from "./MovieCard";

const InputBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  console.log(movies);

  const apikey = import.meta.env.VITE_MOVIE_API_KEY;

  const fetchMovies = (e) => {
    e.preventDefault();
    axiosInstance
      .get(`?apikey=${apikey}&s=${query}`)
      .then((res) => {
        console.log(res);
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
          setError("");
        } else {
          setError(res.data.Error);
          setMovies([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#888888] min-h-screen">
      <form className="flex justify-center items-center p-5 bg-black rounded-b-[30px]">
        <div className="flex rounded-4xl px-4 w-full max-w-[500px] h-[60px] items-center border border-white mx-4">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="h-full w-full outline-none text-[20px] text-white bg-transparent placeholder-white/70"
            type="text"
            placeholder="Search movies"
          />
          <button onClick={fetchMovies}>
            <img className="h-10 p-2" src={Search} alt="Search" />
          </button>
        </div>
      </form>
      
      <div className="flex justify-center">
        <p className="text-red-500 my-3 text-center">{error?.length > 0 && error}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 sm:px-6 md:px-8 lg:px-12 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 mt-6 sm:mt-8 md:mt-12 lg:mt-14 pb-6 sm:pb-8 md:pb-12 lg:pb-14 ">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default InputBar;