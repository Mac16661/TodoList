import React, { useState, useContext } from 'react'
import { TextField } from '@material-ui/core'
import { CustomButton } from './Button'
import styled from 'styled-components';
import { UserContext } from "./ListContext";

const StyledCounter = styled.div`
`

const NameButton  = styled(CustomButton)`
    &&{
        padding: 15px;
        margin-left: 20px;

    }
`

const Styledform = styled.form`
    &&{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    }
`

function PopUp() {

    const {value, setValue} = useContext(UserContext);

    // const [name, setName] = useState("");
    const [text, setText] = useState("");

    function handleText(e) {
        // console.log(e.target.value);
        setText(e.target.value);
    }

    function handleName(e) {
        e.preventDefault();
        setValue(text);
        setText("");
    }
    
    return (
        <StyledCounter>
            <Styledform>
                <TextField label="Enter your name " variant="outlined" onChange={handleText} value={text} />
                <NameButton type="submit" onClick={handleName}>
                    Save
                </NameButton>
            </Styledform>
        </StyledCounter>
    )
}

export default PopUp;
