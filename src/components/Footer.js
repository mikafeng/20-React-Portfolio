import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import '../styles/Footer.css'



export default function Footer() {
    return (
       <div className="main-footer">
        <div className="container">
            <div className="row">
                <ul className="footer-space">

 
                    <a href="https://github.com/mikafeng">
                        <li className="footer-btn">
                            <FaGithub />
                        </li>
                    </a>


                        <a href="https://www.linkedin.com/in/mika-fengler-1628314b/">
                            <li className="footer-btn"> 
                                <FaLinkedin />
                            </li>
                        </a>


                    <a href="https://www.instagram.com/mfeng_._/">
                         <li className="footer-btn">
                            <FaInstagram />
                        </li>
                    </a>

                </ul>
            </div>
        </div>
       </div>
    );
}

        // <section className="footer m-3 p-5">
        //     <footer className="row">
        //         <ul>



        //         </ul>
        //     </footer>
        // </section>