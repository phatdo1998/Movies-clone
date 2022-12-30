import styled from "styled-components";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizontalScrolling } from "../../ulitis/index";
import useViewPort from "../hooks/useViewPort";
import { useDispatch } from "react-redux";
import { setMoviesDetail } from "../redux/store/actions";

const MoviesRow = (props) => {
  const windownWidth = useViewPort();
  const dispath = useDispatch();

  const { movies, title, isNetFlix, idSection } = props;

  const moviesRef = useRef();
  const sliderRef = useRef();

  const [dragDown, setDragdown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isDrag, setIsDrag] = useState(false);

  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragDown, dragMove, isDrag]);

  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        moviesRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizontalScrolling(
        sliderRef.current,
        250,
        -moviesRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };

  const onDragStart = (e) => {
    setIsDrag(true);
    setDragdown(e.screenX);
  };
  const onDragEnd = (e) => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };

  const handleSetMovies = (movie) => {
    dispath(setMoviesDetail(movie));
  };

  return (
    <MoviesRowContainer draggable="false" id={idSection}>
      <h1 className="headingMovies">{title}</h1>
      <MoviesSlider
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
             ${
               windownWidth > 1200
                 ? "300px"
                 : windownWidth > 992
                 ? "250px"
                 : windownWidth > 768
                 ? "200px"
                 : "150px"
             })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let mageUrl = isNetFlix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="moviesItems"
                  ref={moviesRef}
                  draggable="false"
                  onClick={() => handleSetMovies(movie)}
                >
                  <img src={mageUrl} alt="" draggable="false" />
                  <div className="moviesName">{movie.title || movie.name}</div>
                </div>
              );
            }
          })}
      </MoviesSlider>
      <div
        className={`btnLeft ${isNetFlix && `isNetFlix`}`}
        onClick={handleScrollLeft}
      >
        <GoChevronLeft />
      </div>
      <div
        className={`btnRight ${isNetFlix && `isNetFlix`}`}
        onClick={handleScrollRight}
      >
        <GoChevronRight />
      </div>
    </MoviesRowContainer>
  );
};

export default MoviesRow;

const MoviesRowContainer = styled.div`
  background-color: #000;
  color: white;
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .headingMovies {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 30px;
      transition: all 0.3s linear;
    }

    &.isNetFlix {
      height: 100px;
      width: max-content;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    transform: translateY(-20%);

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 30px;
      transition: all 0.3s linear;
    }

    &.isNetFlix {
      height: 100px;
      width: max-content;
    }
  }
`;
const MoviesSlider = styled.div`
  display: grid;

  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .moviesItems {
    opacity: 0.5;
  }

  .moviesItems {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      opacity: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .moviesName {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;
