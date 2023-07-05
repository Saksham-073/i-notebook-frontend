import React, { useContext, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext';


export const Addnote = () => {
    const context = useContext(NoteContext);
    const { addnote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addnote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return (

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
            <form className="px-6 py-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" onChange={onChange} id="title" name='title' value={note.title} type="text" placeholder="Enter note title" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Content:</label>
                    <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" onChange={onChange} id="description" name='description' value={note.description} rows="4" placeholder="Enter note description"></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tag">Tag:</label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" onChange={onChange} id="tag" name='tag' value={note.tag} rows="4" placeholder="Tag" />
                </div>
                <div className="flex justify-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick} type="button">Add Note</button>
                </div>
            </form>
        </div>
    )
}

