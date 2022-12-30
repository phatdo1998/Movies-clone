import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import useScrollY from "../hooks/useScrollY";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const scrolly = useScrollY();
  const [keyWords, setKeyWords] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const keyWord = e.target.value;
    setKeyWords(keyWord);

    keyWord.length > 0
      ? navigate(`/search?keywords=${keyWord.trim()}`)
      : navigate("/");
  };

  const goHome = () => {
    navigate("/");
    setKeyWords("");
  };

  return (
    <Navigation
      style={
        scrolly < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#000" }
      }
    >
      <div className="navContainer">
        <div onClick={goHome} className="logo">
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt=""
          />
        </div>
        <div className="navSearch">
          <AiOutlineSearch className="iconsSearch" />
          <input
            onChange={handleChangeInput}
            value={keyWords}
            type="text"
            placeholder="nhập tên phim..."
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 110;

  @media only srceen and (max-width: 600px) {
    height: 100px;
  }

  .navContainer {
    background-color: #000;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;

    @media only srceen and (max-width: 600px) {
      flex-direction: column;
    }

    .logo {
      width: 120px;
      cursor: pointer;

      img {
        width: 100%;
        background-color: transperant;
      }
    }

    .navSearch {
      color: #fff;
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconsSearch {
        color: var(--color-white);
      }

      .iconsSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        color: #bbb;
        transform: translateX(30px) translateY(13px);
      }

      input {
        font-size: 14px;
        border: 1px solid #fff;
        outline: none;
        color: var(--color-white);
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background: #000;
        transition: width 0.5s;

        &:focus {
          padding-left: 36px;
          width: 380px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
