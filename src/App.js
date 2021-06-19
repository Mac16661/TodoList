import React, { useState } from "react";
import "./App.css";
import Nav from "./stories/Nav.js";
import PopUp from "./Components/PopUp";
import TextInput from "./Components/TextInput";
import { UserContext } from "./Components/ListContext";

function App() {

  const[value, setValue] = useState("");

   return (
    <UserContext.Provider value={{ value, setValue }}>
      <div className="App">
        {value ? <div> <Nav title={value} /> <TextInput /> </div>: <PopUp />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
