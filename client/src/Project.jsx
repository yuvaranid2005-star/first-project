
import "./Project.css";

function Project() {
    return (
        <section className="projects" id="Project">

            <div className="projects-container">

                <div className="projects-heading">
                    <p className="projects-label">MY WORK</p>
                    <h2>My Projects</h2>
                    <p>
                        A few projects I have worked on while learning web development.
                    </p>
                </div>

                <div className="projects-list">

                    <div className="project-card">
                        <div className="project-top">
                            <span>01</span>
                            <span>Web Development</span>
                        </div>

                        <h3>Portfolio Website</h3>

                        <p>
                            A personal portfolio website built to showcase
                            my skills, projects and contact details.
                        </p>

                        <div className="project-tech">
                            <span>React</span>
                            <span>CSS</span>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-top">
                            <span>02</span>
                            <span>Frontend</span>
                        </div>

                        <h3>WhatsApp</h3>

                        <p>
                            A messaging interface practice project with
                            chat lists and conversation layouts.
                        </p>

                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Project;
