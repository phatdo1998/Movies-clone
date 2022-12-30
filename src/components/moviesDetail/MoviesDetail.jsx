import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMoviesDetail } from "../redux/store/actions";
import moment from "moment";

const MoviesDetail = (props) => {
  const { movie, showModal } = props;
  const dispath = useDispatch();

  const hanleCloseModal = () => {
    dispath(setMoviesDetail(null));
  };

  return (
    <MoviesDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={hanleCloseModal}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }')`,
                backgroundSize: "100% 100%",
              }
            : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movie && (movie.name || movie.title)}
            </h1>
            <p className="statistical">
              <span className="rating">
                Rating :{movie && movie.vote_average * 10}
              </span>
              <span className="popularity">
                Popularity: {movie && movie.popularity}
              </span>
            </p>
            <p className="releaseDate">
              Release Date:{" "}
              {movie && moment(movie.first_air_date).format("DD/MM/YYYY")}
            </p>

            <p className="overview">{movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MoviesDetailModal>
  );
};

export default MoviesDetail;

const fadeIn = keyframes`
  from {background-color: rgba(0,0,0,0)};
  to {background-color: rgba(0,0,0,0.6)}
`;

const MoviesDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }

  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    width: 100%;
    height: 60%;
    margin: 0 auto;
    color: #fff;
    transition: all 0.3s ease;
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);

    @media screen and (max-width: 1184px) {
      height: 70%;
    }

    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94), 60%, transparent);

      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95),
          40%,
          rgba(0, 0, 0, 0.733) transparent
        );
        width: 88%;
      }

      @media screen and (max-widt: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95),
          50%,
          transparent
        );
        width: 100%;
      }

      @media screen and (max-width: 600px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88),
          60%,
          transparent
        );
      }

      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: #fff;
        font-size: 20px;
        padding-top: 30px;

        @media screen and (max-width: 600px) {
          font-size: 16px;
          width: 80%;
        }

        .movieTitle {
          margin-top: 30px;
        }

        .statistical {
          margin-top: 20px;
          display: flex;

          .rating {
            color: var(--color-green);
          }

          .popularity {
            color: yellow;
            margin-left: 12px;
          }
        }

        .releaseDate .runTime {
          margin-top: 12px;
        }

        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;

          @media screen and (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
`;
