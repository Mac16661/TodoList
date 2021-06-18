import React, {useState, createContext} from 'react'

export const ListContext = createContext();

function ListProvider(props) {
    const [name, setName] = useState("");
    setName("Subhodip");

    return(
        <ListContext.Provider value={name}>
            {props.children}
        </ListContext.Provider>
    );
}

export default ListProvider;

//TODO: this is currently in use