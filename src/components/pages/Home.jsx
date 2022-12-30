import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../contents/Contents";
import Intro from "../intro/Intro";
import Menu from "../menu/Menu";
import MoviesDetail from "../moviesDetail/MoviesDetail";

const Home = () => {
  const { MovieDetail } = useSelector((state) => state.infoReducer);
  const [isShowMoviesDetail, setShowMoviesDetail] = useState(false);

  useEffect(() => {
    setShowMoviesDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <Intro />
      <Contents />
      <Menu />
      <MoviesDetail movie={MovieDetail} showModal={isShowMoviesDetail} />
    </div>
  );
};

export default Home;
