import  { Button }  from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// &&{ "cssRules" } -> This is used for prioritize the CSS rules of your styled components over those of the JSS

const CustomButton = styled(Button)`
  &&{
    background-color: orange;
    /* font-weight: bold; */
    margin: 10px;
  }
`;


export { CustomButton , StyledButton };
