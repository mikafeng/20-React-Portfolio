// import React, { useState } from 'react';
// import NavTabs from './NavTabs';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';



export default function PortfolioContainer() {
    return (
        <BrowserRouter>
        <div className='page-container'>
            <div className='content-wrap'>
                <header>
                    <nav>
                        <Link to="/">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                    </nav>
                </header>
            <Routes>
                <Route path='/' element={<About/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            </div>
            <Footer />
        </div>
        </BrowserRouter>
    );
}

