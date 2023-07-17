import React from "react";


export default function About() {
return(
    <section className="about m-2 p-4">
        <div className="row p-3">
            <p className="col about p-4 m-3"> 
                Hi there! I'm Mika. <br/>

                I'm a passionate full stack developer in Atlanta with expertise in education, art, and sustainability. 
                As an educator and artist, I excel in team leadership, collaboration, creative direction, responsive curriculum development, and agile problem-solving.
                I constantly integrate my diverse skill set to push the boundaries of technology and foster a more equitable and 
                innovative world. 
                I aim to craft exceptional web experiences and contribute to the ongoing evolution of user-centric solutions.

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