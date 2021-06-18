import React, { useContext } from "react";
import "./App.css";
import Nav from "./stories/Nav.js";
import PopUp from "./Components/PopUp";
import TextInput from "./Components/TextInput";
// import ListProvider from "./Components/ListContext";
// import { ListContext } from "./Components/ListContext";


function App() {
  
  //TODO: context api
  // const value = useContext(ListContext);
  // console.log(value);
  return (
      // {<ListProvider>}
      <div className="App">
        <Nav/>
        <PopUp />
        <TextInput />
      </div>
    // {</ListProvider>}
  );
}

export default App;
