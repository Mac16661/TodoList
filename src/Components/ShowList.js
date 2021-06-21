import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  border: 1px solid orange;
  border-radius: 10px;
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
`;

const StyledPara = styled.p`
  flex: 1;
  margin-left: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  font-size: 25px;
`;

function ShowList({ todo }) {
  return (
    <StyledContainer>
      <StyledPara>{todo}</StyledPara>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </StyledContainer>
  );
}

export default ShowList;
