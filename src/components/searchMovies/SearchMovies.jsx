import React, { useEffect } from "react";
import styled from "styled-components";
import useViewPort from "../hooks/useViewPort";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchMovies, setMoviesDetail } from "../redux/store/actions";

const SearchMovies = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const windownWidth = useViewPort();
  const dispath = useDispatch();
  const { SearchMovies } = useSelector((state) => state.infoReducer);
  const keywords = useQuery().get("keywords");

  useEffect(() => {
    if (keywords) dispath(getSearchMovies(keywords));
  }, [keywords, dispath]);

  return (
    <SearchPane>
      {SearchMovies && SearchMovies.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windownWidth > 1200
                ? 5
                : windownWidth > 992
                ? 4
                : windownWidth > 768
                ? 3
                : windownWidth > 600
                ? 2
                : 1
            }, auto)`,
          }}
        >
          {SearchMovies.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== null) {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  onClick={() => dispath(setMoviesDetail(movie))}
                  key={index}
                  className="moviesItem"
                >
                  <img src={imageUrl} alt={movie.name || movie.title} />
                  <span className="moviesName">
                    {movie.name || movie.title}
                  </span>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        <NotFound className="">
          <h1 className="">khong tim thay "key words"</h1>
        </NotFound>
      )}
    </SearchPane>
  );
};

export default SearchMovies;

const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 88px;
  background-color: #000;
  transition: all 0.3s linear;

  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;

    &:hover .moviesItem {
      opacity: 0.7;
    }

    .moviesItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3s linear;

      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;

const NotFound = styled.div`
  padding: 5rem 8rem;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
`;
