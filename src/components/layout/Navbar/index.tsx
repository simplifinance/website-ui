import TopBar from "./Topbar";
import NavList from "./NavList";
import React from "react";

const NavBar : React.FC<{handleClick: () => void, isClicked: boolean}> = ({ handleClick, isClicked }) => {
  return (
    <React.Fragment>
      <TopBar handleClick={handleClick} isClicked={isClicked} />
      <NavList handleClick={handleClick} isClicked={isClicked} />
    </React.Fragment>
  );
};

export default NavBar;
