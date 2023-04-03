import React from "react";
import {projects} from "../data";

export default function Projects() {
return(
    <section id="projects">
        <div>
            <div>
                <h1>Projects</h1>
                <p>descriptionssss</p>
            </div>
            <div>
                {projects.map((project) => (
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
                ))
                }
            </div>
        </div>

    </section>
)


 }