import React from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{

    return(
        <NoteState.Provider value={state}>
            {props.children}
        </NoteState.Provider>
    )
}

export default NoteState;