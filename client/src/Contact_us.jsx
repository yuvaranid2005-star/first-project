
import "./Contact_us.css";

function Contact_us() {
    return (
        <section className="contact" id="Contact_us">
            <div className="contact-container">

                <p className="contact-subtitle">GET IN TOUCH</p>

                <h2>Let's Connect</h2>

                <p className="contact-description">
                    I'm a BCA student passionate about web development.
                    I'm looking forward to learning new technologies,
                    building projects, and exploring developer opportunities.
                </p>

                <div className="contact-details">

                    <div className="contact-card">
                        <h3>Email</h3>
                        <p>Let's talk about opportunities.</p>
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=yuvaranid2005@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            
                        >
                            Send Me an Email
                        </a>
                    </div>

                    <div className="contact-card">
                        <h3>LinkedIn</h3>
                        <p>Connect with me professionally.</p>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View LinkedIn 
                        </a>
                    </div>

                    <div className="contact-card">
                        <h3>GitHub</h3>
                        <p>Explore my code and projects.</p>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View GitHub 
                        </a>
                    </div>

                </div>

                <div className="contact-bottom">
                    <h3>Have an opportunity in mind?</h3>
                    <p>I'd be happy to hear from you!</p>

                  <a
    href="https://mail.google.com/mail/?view=cm&to=yuvaranid2005@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="contact-btn"
>
    Let's Talk
</a>
                </div>

            </div>
        </section>
    );
}

export default Contact_us
