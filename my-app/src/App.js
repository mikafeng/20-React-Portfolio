import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
