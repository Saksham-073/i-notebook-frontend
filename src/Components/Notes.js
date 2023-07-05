import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../Context/notes/NoteContext'
import Noteitem from './Noteitem'
import { useNavigate } from 'react-router-dom';



const Notes = () => {
    const [Modal, setModal] = useState(false);
    const context = useContext(NoteContext)
    let navigate = useNavigate();
    const { notes, getNotes, editnote } = context
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate("/Signin")
        }
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }
    const handleClick = (e) => {
        editnote(note.id, note.etitle, note.edescription, note.etag)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    function MyModal() {
        return (
            <>
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-3 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="sm:flex sm:items-start" >
                                            <form className="px-5 py-3">
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-3" htmlFor="etitle">Title:</label>
                                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" onChange={onChange} id="etitle" name='etitle' value={note.etitle} type="text" placeholder="Enter note title" />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edescription">Content:</label>
                                                    <textarea className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" onChange={onChange} id="edescription" name='edescription' value={note.edescription} rows="4" placeholder="Enter note description"></textarea>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="etag">Tag:</label>
                                                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500" onChange={onChange} id="etag" name='etag' value={note.etag} rows="4" placeholder="Tag" />
                                                </div>
                                                <div className="bg-gray-50 px-5 py-3 sm:flex sm:flex-row-reverse sm:px-6 mx-3">
                                                    <button type="button" className=" mx-4 mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 sm:mt-0 sm:w-auto " onClick={handleClick}>Update Note</button>
                                                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500 sm:mt-0 sm:w-auto" onClick={handleOnClick}>Close</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    function handleOnClick() {
        if (Modal === false) {
            setModal(true);
        } else {
            setModal(false);
        }
    }
    return (
        <>
            <div className="relative isolate overflow-hidden bg-gray-900 py-5 sm:py-5">
                <div className="mx-auto px-4 mt-1 lg:px-3">
                    <h1 className="text-2xl font-serif tracking-tight text-black-600 sm:text-4xl">Your Notes </h1>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="container">
                    <button className="btn btn-dark d-none" ref={ref} onClick={handleOnClick} >Edit note</button>
                    {Modal && <MyModal />}
                </div>
                <div className="mt-3 mx-4">
                {notes.length===0 && 'No notes to display'}
                </div>
                <div className='row my-3'>
                    {notes.map((note) => {
                        return <Noteitem note={note} updateNote={updateNote} key={note._id} />
                    })}
                </div>
            </div>
        </>
    );
}

export default Notes