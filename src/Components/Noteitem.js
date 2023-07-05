import React, { useContext } from 'react'
import NoteContext from '../Context/notes/NoteContext'

const Noteitem = (props) => {
    const context = useContext(NoteContext)
    const { deletenote } = context
    const { note, updateNote } = props;
    return (
        <>
        
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
                <div className="px-6 py-4">
                    <h2 className="text-xl font-bold mb-2">{note.title}</h2>
                    <p className="text-gray-700 text-base">{note.description}</p>
                </div>
                <div className="px-6 py-4">
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}></i>
                    <i className="fa-solid fa-trash mx-2 " onClick={() => { deletenote(note._id) }}></i>
                </div>
            </div>
            
        </>
    )
}

export default Noteitem