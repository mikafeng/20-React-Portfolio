import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState ('About');

    //This method checks the value of 'currentPage' and returns the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div> Hello 
            {/* Here currentPage is passed from state. handlePageChange function is passed to update the currentPage*/}
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
           
            {/* Here the renderPage method is called and will return a component */}
            {renderPage()}

        </div>
    )
};