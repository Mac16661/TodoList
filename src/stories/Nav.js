import React, { useContext } from "react";
import "./Nav.css";
import { CustomButton } from "../Components/Button.js";
import { UserContext } from "../Components/ListContext";

function Nav( { title } ) {

  const msg = useContext(UserContext);
  return (
    <div className="header">
      <div className="header__center">
        <h1>{title}</h1>
      </div>

      <div className="header__right">
        <CustomButton className="headerRight__button1">Login</CustomButton>
        <CustomButton  className="headerRight__button2">SignUp</CustomButton>
      </div>
    </div>
  );
}


export default Nav;
