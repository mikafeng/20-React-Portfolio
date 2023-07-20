import React from "react";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../styles/Footer.css'



export default function Footer() {
    return (
       <div className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>First Column</h4>
                    <ul className="list-unstyled">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Second Column</h4>
                    <ul className="list-unstyled">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                    </ul>
                    </div>
            </div>
        </div>
       </div>
    );
}

        // <section className="footer m-3 p-5">
        //     <footer className="row">
        //         <ul>
        //             <a href="https://github.com/mikafeng">
        //                 <li>
        //                     <FaGithub />
        //                 </li>
        //             </a>
        //             <a href="https://www.linkedin.com/in/mika-fengler-1628314b/">
        //                 <li>
        //                     <FaLinkedin />
        //                 </li>
        //             </a>
        //             <a href="https://www.instagram.com/mfeng_._/">
        //                 <li>
        //                     <FaInstagram />
        //                 </li>
        //             </a>
        //         </ul>
        //     </footer>
        // </section>