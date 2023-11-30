import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import First from './components/First/First.js';
import Second from './components/Second/Second.js';
import Third from './components/Third/Third.js';
import Fifth from './components/Fifth/Fifth.js';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <First></First>
    <Second></Second>
    <Third></Third>
    <Fifth></Fifth>
    </>
  );
}

export default App;
