import React, { useContext } from "react";
import "./App.css";
import Nav from "./stories/Nav.js";
import PopUp from "./Components/PopUp";
import TextInput from "./Components/TextInput";
import { UserContext } from "./Components/ListContext";

function App() {
  const name = useContext(UserContext);
  return (
      <div className="App">
        <Nav title={name}/>
        {name ? <TextInput /> : <PopUp /> }
      </div>
  );
}

export default App;
