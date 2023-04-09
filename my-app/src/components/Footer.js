import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";



export default function Footer() {
    return (
        <section className="footer m-3 p-5">
            <footer>
                <ul className="row">
                    <a href="https://github.com/mikafeng">
                        <li>
                            <FaGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/mika-fengler-1628314b/">
                        <li>
                            <FaLinkedin />
                        </li>
                    </a>
                    <a href="https://www.instagram.com/mfeng_._/">
                        <li>
                            <FaInstagram />
                        </li>
                    </a>
                </ul>
            </footer>
        </section>
    );
}