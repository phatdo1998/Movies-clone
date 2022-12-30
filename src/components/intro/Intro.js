import React, { useState } from "react";
import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";

const Intro = () => {
  const [isMuted, setIsmuted] = useState(true);
  return (
    <IntroContainer>
      <ReactPlayer
        loop={true}
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/273686020"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="headingIntro">Netflix The Rain</h1>
        <p className="overviewIntro">
          Trailer for Netflix series "The Rain" Production: Fox Devil Films GmbH
          for Netflix Amsterdam Director: Simon Ritzler Dop: Carlo Jelavic
          Editor: Michael Timmers Colorist: Mike Bothe Compositing: Stathis
          Nafpliotis
        </p>
      </div>
      {isMuted ? (
        <VscMute className="btnVolume" onClick={() => setIsmuted(!isMuted)} />
      ) : (
        <VscUnmute className="btnVolume" onClick={() => setIsmuted(!isMuted)} />
      )}

      <div className="fadeBottom"></div>
    </IntroContainer>
  );
};

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-primary);
  position: relative;
  color: var(--color-white);
  padding-top: 50%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;

    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }

    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }

      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }

    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;

      @media screen and (max-width: 800px) {
        font-size: 16px;
      }

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .btnVolume {
    position: absolute;
    height: 35px;
    width: 35px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    color: #bbb;
    border: 1px solid #fff;
    transition: all 0.3s ease;
    transform: scale(1);
    padding: 6px;

    &:hover {
      color: var(--color-white);
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }

    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }

    @media screen and (max-width: 600px) {
      height: 25px;
      width: 25px;
      padding: 2px;
    }
  }

  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
