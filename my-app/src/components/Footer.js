import React from "react";
import {npm} from "../assets"
export default function Footer() {
    return (
        <section className="footer m-3 p-5">
            <div className=" footer row in-line">
                <a href="https://github.com/mikafeng">
                <button type="button" class=" footer-btn btn btn-dark btn-lg btn-floating">
                    <i class="fas fa-camera"></i>
            
                </button>
                </a>
                <button type="button" class=" footer-btn btn btn-dark btn-lg btn-floating">
                    <i class="fas fa-camera"></i>
                </button>
                <button type="button" class=" footer-btn btn btn-dark btn-lg btn-floating">
                    <i class="fas fa-camera"></i>
                </button>
            </div>
        </section>
    );
}