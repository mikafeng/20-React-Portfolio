import React from "react";
import '../styles/NavTabs.css'
// import { NavItem} from "react-bootstrap";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

// function NavTabs({handlePageChange}) {
//     return (
//         <Navbar
//          collapseOnSelect
//          expand="sm"
//          active-key="about"
//          onClick={() => handlePageChange()}
//         >
//             <NavbarToggle aria-controls="responsive-navbar-nav"/>
//             <NavbarCollapse id="responsive-navbar-nav">
//                 <Nav>
//                     <Nav.Item>
//                         <NavLink eventKey="/about">About</NavLink>
//                     </Nav.Item>

//                     <Nav.Item>
//                         <NavLink eventKey="Projects">Projects</NavLink>
//                     </Nav.Item>

//                     <Nav.Item>
//                         <NavLink eventKey="Contact">Contact</NavLink>
//                     </Nav.Item>
//                 </Nav>
//             </NavbarCollapse>
//         </Navbar>
//     );
// }

// export default NavTabs;


//Use object destructuring assignment to pull props currentPage and handlePageChange from PortfolioContainer
function NavTabs({currentPage, handlePageChange}) {
    return (
        <div className="nav-style">

        {/* NAVTABS */}
        {/* In <a> tag, use ternary operator to set active link from bootstrap if clicked nav-item is equal to currentPage.
        Else, set to a normal 'nav-link'. */}
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
        </div>
    );
 } 

 export default NavTabs;