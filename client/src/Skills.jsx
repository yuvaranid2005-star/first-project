
import "./Skills.css";

function Skills() {
    return (
        <section className="skills" id="Skills">

            <div className="skills-container">

                <div className="skills-heading">
                    <p className="skills-label">WHAT I KNOW</p>
                    <h2>My Skills</h2>
                    <p>
                        Technologies I use and learn to build websites.
                    </p>
                </div>

                <div className="skills-list">

                    <div className="skill-card">
                        <h3>HTML</h3>
                        <p>Web page structure</p>
                    </div>

                    <div className="skill-card">
                        <h3>CSS</h3>
                        <p>Styling and layouts</p>
                    </div>

                    <div className="skill-card">
                        <h3>JavaScript</h3>
                        <p>Interactive websites</p>
                    </div>


                    <div className="skill-card">
                        <h3>React</h3>
                        <p>Component-based UI</p>
                    </div>


                </div>

            </div>

        </section>
    );
}

export default Skills;
