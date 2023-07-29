import React, { useState } from "react";
import "./style/Navbar.css";
import OpenFile from "./OpenFile";
import { Link } from "react-router-dom";
const Menu = ({openMenu}) => {
  return (
    <>
      <ul>
        <li> <Link to = '/internet-media'>Internet media</Link> </li>
        <li> <OpenFile/></li>
        <li> <button>Open folder</button> </li>
        <li> <button>Recent </button> </li>
        <li> <button onClick={openMenu}>Close </button> </li>




      </ul>
    </>
  )
}


const Navbar = () => {
  const [isDropDown, setIsDropDownMenu] = useState(false);
  const openMenu = () => {
    if (isDropDown) {
      setIsDropDownMenu(false)
    } else {
      setIsDropDownMenu(true);
    }
  }


  return (
    <>
      <nav className="top-navbar">
        <div className="logo">Stack Player</div>
        <ul className="nav-links">
          <li className="nav-link">
            <span>Home</span>
            <button onClick={openMenu}>File</button>
          </li>

        </ul>
      </nav>
      <div className="dropdown">
        {(isDropDown) && (
          <Menu openMenu={openMenu} />
        )}
      </div>
    </>
  );
};

export default Navbar;
