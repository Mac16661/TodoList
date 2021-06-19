import React, { useContext } from "react";
import "./Nav.css";
import { CustomButton } from "../Components/Button.js";
import { UserContext } from "../Components/ListContext";

function Nav( { title } ) {

  const { value, setValue } = useContext(UserContext);

  function handleClick() {
    setValue("");
  }
  return (
    <div className="header">
      <div className="header__center">
        <h1>{title}</h1>
      </div>

      <div className="header__right">
        <CustomButton className="headerRight__button1" onClick={handleClick}>LogOut</CustomButton>
      </div>
    </div>
  );
}


export default Nav;
