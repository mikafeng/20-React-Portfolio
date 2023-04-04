import React from "react";

export default function Navbar() {
    return (
        <header className="App-header">
            <h1 className="display-1">Mika Fengler</h1>
            <div className="navbar">
                <a className="App-link p-3" href="#about">About</a>
                <a className="App-link p-3" href="#projects">Projects</a>
                <a className="App-link p-3" href="#contact">Contact</a>
            </div>
        </header>
    );
 }