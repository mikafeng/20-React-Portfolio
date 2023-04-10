import React from "react";
import {projects} from "../data";

export default function Projects() {
return(
    <section id="projects" className="p-2 container-fluid">
        <div>
            <div>
                <h1 id="project-title">Projects</h1>
                
            </div>
            <div className="project-container m-5">
               <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 g-4">
                {projects.map((project) => (
                    <div className="col-12 ">

                            <div className="card projectCard" 
                            // style={{ width: '30rem' }} 
                            >                      
                                <img src={project.image} alt="project-img" className="project-img img-fluid card-img-top"/>
                                
                                <div className="card-body">
                                <a href={project.link} className=" projectLink link-opacity-50-hover">
                                <h2 className="card-title">{project.title}</h2>
                                <p className="card-text p-2">{project.description}</p>
                                </a>
                                </div>
                            </div>
                    </div>
                ))
                }
                </div>
            </div>
        </div>

    </section>
    );
}