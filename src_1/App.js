import React from 'react';
import './App.css';
import Projects from './app/Projects';
import Header from './app/Header';
import Resume from './app/Resume';
import Home from './app/Home';
import { Outlet } from "react-router-dom";
import About from './app/About'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    
    <Router>
    <Routes>
        <Route path='/' element={<Header />}  >
            <Route index path='resume' element={<Resume />} />
            <Route path='projects' element={<Projects />}/>
            <Route path='' element={<Home />}/>
            <Route path='Home' element={<Home />}/>
            <Route path='Contact' element={<About />}/>
        </Route>
    </Routes>
</Router>
    // <div className="App">
    //   <Header/>
    //   {Outlet}
    //   {/* <Content/> */}
    //   {/* <Resume/> */}
    // </div>
  );
}

export default App;
