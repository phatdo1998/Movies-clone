import React from "react";
import { randomColor } from "../../ulitis";
import { Link } from "react-scroll";

const MenuItems = ({ name, Icon, to }) => {
  return (
    <Link
      className="subMenu"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      activeClass="active"
      duration={500}
    >
      <Icon className="iconMenu" style={{ color: randomColor(1) }} />
      <span>{name}</span>
    </Link>
  );
};

export default MenuItems;
