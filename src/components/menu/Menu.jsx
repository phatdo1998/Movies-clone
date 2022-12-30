import { AiFillHome, AiFillFire, AiFillStar } from "react-icons/ai";
import { MdTheaterComedy } from "react-icons/md";
import {
  GiNinjaHeroicStance,
  GiRomanToga,
  GiGhost,
  GiBandageRoll,
} from "react-icons/gi";
import styled from "styled-components";
import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <MenuPane>
      <MenuItems name="Home" Icon={AiFillHome} to="home" />
      <MenuItems name="Trending" Icon={AiFillFire} to="trending" />
      <MenuItems name="Top rated" Icon={AiFillStar} to="topRated" />
      <MenuItems
        name="Actions Movies"
        Icon={GiNinjaHeroicStance}
        to="actions"
      />
      <MenuItems name="Comedy Movies" Icon={MdTheaterComedy} to="comedy" />
      <MenuItems name="Horror Movies" Icon={GiGhost} to="horror" />
      <MenuItems name="Romance Movies" Icon={GiRomanToga} to="romance" />
      <MenuItems name="Documentaries" Icon={GiBandageRoll} to="documentaries" />
    </MenuPane>
  );
};

export default Menu;

const MenuPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 40px;
  z-index: 100;
  padding: 4px 0;
  overflow: hidden;
  display: flex;
  transition: all 0.3s linear;
  flex-direction: column;
  transform-origin: left center;
  background-color: rgba(0, 0, 0, 0.8);

  &:hover {
    width: 180px;
    background-color: rgba(58, 55, 55, 0.5);
  }

  .subMenu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;
  }

  .iconMenu {
    font-size: 25px;
    margin-right: 8px;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    margin-left: 4px;
    color: rgba(255, 255, 255, 0.6);

    &:hover {
      color: #fff;
    }
  }
`;
