import React from "react";
import {projects} from "../../data";

export default function Projects() {
return(
    <section id="projects" className="p-2 container-fluid">
        <div>
            <div>
                <h1 id="project-title">PROJECTS </h1>
                
            </div>
            <div className="project-container m-5">
               <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 g-4">
                {projects.map((project => 
                    <div className="col-12 ">

                            <div key={project.id} className="card projectCard" 
                            // style={{ width: '30rem' }} 
                            >                      
                                
                                <div className="card-body">  
                                    <h2 className="card-title">{project.title}</h2>
                                    <img src={project.image} alt="project-img" className="project-img img-fluid card-img-top"/>
                                    <h4>{project.description}</h4>
                                    <p className="card-text p-2">{project.subtitle}</p>
                                    <li>
                                        <a href={project.link}>
                                            Deployed Application
                                        </a>
                                    </li>
                                
                                    <li>
                                    <a href={project.repository} >
                                            GitHub Repository
                                        </a> 
                                    </li>
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