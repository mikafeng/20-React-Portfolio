import React from "react";

//Use object destructuring assignment to pull props currentPage and handlePageChange from PortfolioContainer
function NavTabs({currentPage, handlePageChange}) {
    return (
        <>
        {/* HEADER */}
            <header className="App-header p-2">
                <h1 className="display-1 p-3 m-3">mika fengler</h1>
            </header>

        {/* NAVTABS */}
        {/* In <a> tag, use ternary operator to set active link from bootstrap if clicked nav-item is equal to currentPage.
        Else, set to a normal 'nav-link'. */}
            <ul className="nav nav-tabs">
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
        </>
    );
 } 

 export default NavTabs;