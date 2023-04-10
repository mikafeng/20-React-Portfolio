import React from "react";


export default function About() {
return(
    <section className="about m-2 p-4">
        <div className="row p-3">
            <p className="col about p-4 m-3"> 
                Hi there! I'm Mika. <br/>
                I'm a new developer working with the MERN stack
                and an Atlanta artist.
            </p>
        
            <div className="col p-3 skills">
                <h2 className="abtHead p-1"> Professional Skillset </h2>
                <div className="container">
                    <h3>JavaScript, NodeJS, MongoDB, Express, React, MySQL</h3>
                </div>
            </div>
        </div>
    </section>
 );
}