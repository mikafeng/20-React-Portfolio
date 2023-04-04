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
                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                    <a href="">

                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div>
                            <h2>
                                {project.subtitle}
                            </h2>
                            <h1>
                                {project.title}
                            </h1>
                            <p>{project.description}</p>
                        </div>
                    </a>
                    </div>
                ))
                }
            </div>
        </div>

    </section>
    );
}