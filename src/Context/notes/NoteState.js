import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "https://i-notebook-wsj6.onrender.com"
  const notesInitial = []
  const [notes, setnotes] = useState(notesInitial)

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }

    });
    const json = await response.json()
    setnotes(json)
  }

  const addnote = async (title, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json;
    setnotes(notes.concat(note))
  }

  const deletenote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json();

    const newNotes = notes.filter((note) => { return note._id !== id })
    setnotes(newNotes)
  }


  const editnote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  }
  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;