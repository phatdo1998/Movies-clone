import React, { useEffect } from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../redux/store/actions";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import useScrollY from "../hooks/useScrollY";

const scrollToTop = () => {
  scroll.scrollToTop();
};
const Contents = () => {
  const scrollY = useScrollY();

  const dispath = useDispatch();
  const {
    NetFlixOriginals,
    TrendingMovies,
    ActionsMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
    TopratedMovies,
  } = useSelector((state) => state.infoReducer);

  useEffect(() => {
    dispath(ACTIONS.getNetFlixOriginals());
    dispath(ACTIONS.getTrendingMovies());
    dispath(ACTIONS.getTopRatedMovies());
    dispath(ACTIONS.getComedyMovies());
    dispath(ACTIONS.getHorrorMovies());
    dispath(ACTIONS.getRomanceMovies());
    dispath(ACTIONS.getDocumenetariesMovies());
    dispath(ACTIONS.getActionsMovies());
  }, [dispath]);
  return (
    <>
      <MoviesRow
        movies={NetFlixOriginals}
        title="NetFlix Originals"
        isNetFlix={true}
        idSection="home"
      />
      <MoviesRow
        movies={TrendingMovies}
        title="Trending Movies"
        idSection="trending"
      />
      <MoviesRow
        movies={TopratedMovies}
        title="Top Retad Movies"
        idSection="topRated"
      />
      <MoviesRow
        movies={ActionsMovies}
        title="Actions Movies"
        idSection="actions"
      />
      <MoviesRow
        movies={ComedyMovies}
        title="Comedy Movies"
        idSection="comedy"
      />
      <MoviesRow
        movies={HorrorMovies}
        title="Horror Movies"
        idSection="horror"
      />
      <MoviesRow
        movies={RomanceMovies}
        title="Romance Movies"
        idSection="romance"
      />
      <MoviesRow
        movies={Documentaries}
        title="Documentaries "
        idSection="documentaries"
      />
      <GoToTop
        onClick={() => scrollToTop()}
        style={{ visibility: `${scrollY > 600 ? "visible" : "hidden"}` }}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </>
  );
};

export default Contents;

const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  font-size: 50px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  @media screen and (max-width: 600px) {
    right: 40px;
  }
`;
