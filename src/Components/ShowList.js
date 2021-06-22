import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Alert } from '@material-ui/lab';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  /* border: 1px solid orange; */
  border-radius: 10px;
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const StyledPara = styled(Alert)`
  &&{flex: 1;
  /* margin-left: 20px; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 25px;} 
`;

const StyledDelete = styled(DeleteIcon)`
  &&{fill: black;
  }
`;

function ShowList({ todo, id, isDone }) {

  function handleDelete() {
    //Delete to do from the state
  }
  return (
    <StyledContainer>
      <StyledPara variant="filled" severity={isDone ? "success" : "warning"}>{todo}</StyledPara>
      <IconButton aria-label="delete">
        <StyledDelete  onClick={handleDelete}/>
      </IconButton>
    </StyledContainer>
  );
}

export default ShowList;
