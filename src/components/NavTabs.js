import React from "react";



function NavTabs({currentPage, handlePageChange}) {
    return (
        <header className="App-header p-2">
            <h1 className="display-1 p-3 m-3">mika fengler</h1>

            <ul className="nav">
                <li className="nav-item">
                    <a href="#about"
                       onClick={() => handlePageChange('About')} 
                       className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                       About 
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    >
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>

            </ul>
        </header>
    );
 } 

 export default NavTabs;