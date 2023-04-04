import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer"



import './App.css';

function App() {
  return (

    <main className='App'>
      <Navbar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>

  );
}

export default App;
