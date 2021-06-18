import React from "react";
import "./Nav.css";
import { CustomButton } from "../Components/Button.js"

function Nav( { title } ) {
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
