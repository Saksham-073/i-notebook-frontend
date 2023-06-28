import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
// import Example from './Components/Example';


function App() {
  return (
    <>
      <Router>
        {/* <Example/> */}
        <Navbar />
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
