import React from "react";
import { useSelector } from "react-redux";
import SearchMovies from "../searchMovies/SearchMovies";
import MoviesDetail from "../moviesDetail/MoviesDetail";

const Search = () => {
  const { MovieDetail } = useSelector((state) => state.infoReducer);
  return (
    <div>
      <SearchMovies />
      <MoviesDetail
        showModal={MovieDetail ? true : false}
        movie={MovieDetail}
      />
    </div>
  );
};

export default Search;
