import "./About_us.css"
function About_us(){
    return(
         <section className="about" id="About_us">

            <div className="about-container">

                <div className="about-heading">
                    <p className="about-label">GET TO KNOW ME</p>
                    <h2>About Me</h2>
                    <div className="about-line"></div>
                </div>

                <div className="about-content">

                    <div className="about-text">
                        <h3>I'm Yuvarani, a Mern Stack Developer.</h3>

                        <p>
                            I am a BCA student passionate about
                            web development and creating user-friendly
                            websites.
                        </p>

                        <p>
                            I am currently learning React and modern
                            web technologies to improve my development
                            skills and build real-world projects.
                        </p>

                        <p>
                            My goal is to become a skilled developer
                            and create useful digital experiences.
                        </p>
                    </div>

                    <div className="about-details">
                        <div className="detail-item">
                            <h4>Education</h4>
                            <p>Bachelor of Computer Applications</p>
                        </div>

                        <div className="detail-item">
                            <h4>Focus</h4>
                            <p>Frontend & Full Stack Development</p>
                        </div>

                        <div className="detail-item">
                            <h4>Currently Learning</h4>
                            <p>React, JavaScript </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    
    )
}
export default About_us