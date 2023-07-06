import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
import About from './Components/About';
import NoteState from './Context/notes/NoteState';
// import { Alert } from './Components/Alert';
import Notes from './Components/Notes';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Example from './Components/Example';
import Dashborad from './Components/Dashborad';


function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Example />
          {/* <Navbar /> */}
          {/* <Alert message="iNotebook"/> */}
          <Routes>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/signin' element={<Signin />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/' element={<Dashborad />} />
            <Route exact path='/redirected-component' element={<Signin />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/notes' element={<Notes />} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
