import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


export default function Footer() {
    return (
        <section className="footer m-3 p-5">
            <footer>
                <ul className="row">
                    <a href="">
                        <li>
                            <FaGithub />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <FaLinkedin />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <FaInstagram />
                        </li>
                    </a>
                </ul>
            </footer>
        </section>
    );
}