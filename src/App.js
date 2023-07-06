import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
import Notes from './Components/Notes';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Example from './Components/Example';
import LoadingBar from 'react-top-loading-bar';
import Profile from './Components/Profile';


function App() {
  const [progress, setprogress] = useState(0)
  return (
    <>
      <NoteState>
        <Router>
          <Example />
          <LoadingBar color='#f11946' progress={progress} />
          <Routes>
            <Route exact path='/signup' element={<Signup setprogress={setprogress} />} />
            <Route exact path='/signin' element={<Signin setprogress={setprogress} />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/notes' element={<Notes />} />
            <Route exact path='/profile' element={<Profile />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
