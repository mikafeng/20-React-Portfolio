import React from "react";
import {projects} from "../data";

export default function Projects() {
return(
    <section id="projects" className="container-fluid m-3 p-3">
        <div>
            <div>
                <h1 id="project-title">Projects</h1>
                
            </div>
        <div>
            {projects.map((project) => (
                <div className="project-container container-fluid ">
                <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row my-5">

                        <div className="card projectCard" style={{ width: '30rem' }} >
                    
                        <img src={project.image} alt="project-img" className="img-fluid card-img-top"/>
                        
                        <div className="card-body">
                        <a href={project.link} className=" projectLink link-opacity-50-hover">
                        <h2 className="card-title">{project.title}</h2>
                        <p className="card-text p-2">{project.description}</p>
                        </a>
                        </div>
                        </div>

                    </div>
                </div>
                </div>
                </div>
            ))
            }
        </div>
        </div>

    </section>
    );
}