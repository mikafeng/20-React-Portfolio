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
            <Footer />
        </BrowserRouter>
    );
}



// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('About');

//     //This method checks the value of 'currentPage' and returns the corresponding component to render.
//     const renderPage = () => {
//         if (currentPage === 'About') {
//             return <About />;
//         }
//         if (currentPage === 'Projects') {
//             return <Projects />;
//         }
//         return <Contact />; 
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div className='page-container'>
//             <div className='content-wrap'>
//             {/* Here currentPage is passed from state. handlePageChange function is passed to update the currentPage*/}
//             <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
           
//             {/* Here the renderPage method is called and will return a component */}
//             {renderPage()}
//             </div>
//             <Footer />
//         </div>
//     )
// };