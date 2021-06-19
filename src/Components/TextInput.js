import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { CustomButton } from "./Button";
import styled from "styled-components";

const StyledCounter = styled.div`
`;

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
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  function handleText(e) {
    // console.log(e.target.value);
    setText(e.target.value);
  }

  function handleName(e) {
    e.preventDefault();
    setTodo(text);
    setText("");
  }

  return (
    <StyledCounter>
      <Styledform>
        <StyledTextField
          label="Enter Todo "
          variant="outlined"
          onChange={handleText}
          value={text}
        />
        <NameButton type="submit" onClick={handleName}>
          Add To List
        </NameButton>
      </Styledform>
    </StyledCounter>
  );
}

export default TextInput;
