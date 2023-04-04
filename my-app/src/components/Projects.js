import React from "react";
import {projects} from "../data";

export default function Projects() {
return(
    <section id="projects" className="container-fluid m-3 p-3">
        <div>
            <div>
                <h1>Projects</h1>
                <p>descriptionssss</p>
            </div>
            <div>
                {projects.map((project) => (
                    <div className="card projectCard text-bg-dark shadow p-3 mb-5 bg-body-tertiary rounded">
                    <div className="row">
                        <div className="col-md-4">
                            <image src={project.image} alt={project.description} className="portImg"/>
                        </div>
                        <div className="col-md-8"> 
                            <div className="card-body">
                                    <a href={project.link} className=" projectLink link-opacity-50-hover">
                                        <h1 className="card-title">
                                    {project.title}
                                </h1>
                                </a>
                                <p className="card-text">{project.description}</p>
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