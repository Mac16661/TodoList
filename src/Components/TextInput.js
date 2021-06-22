import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { CustomButton } from "./Button";
import styled from "styled-components";
import ShowList from "./ShowList";

const StyledCounter = styled.div``;

const NameButton = styled(CustomButton)`
  && {
    padding: 15px;
    margin-left: 20px;
  }
`;

const Styledform = styled.form`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: 20rem;
  }
`;

function TextInput() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    // {todo: "homework"}, {todo: "School work"}
  ]);
  
  //TODO: There is some error in input 
  function handleName(e) {
    e.preventDefault();
    // console.log(text);
    var id = Math.floor(Math.random() * 100) + 1;
    setTodos([...todos, {id: id, todo: text, isDone: false}]);
    // console.log(todos);
    setText("");
  }

  return (
    <StyledCounter>
      <Styledform>
        <StyledTextField
          label="Enter Todo "
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <NameButton type="submit" onClick={handleName}>
          Add To List
        </NameButton>
      </Styledform>

      {
        todos.map( obj => (
          <ShowList key={obj.id} todo={obj.todo} isDone={obj.isDone} id={obj.id} />
        ))
      }
    </StyledCounter>
  );
}

export default TextInput;
