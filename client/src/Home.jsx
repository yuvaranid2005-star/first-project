
import "./Home.css";

function Home() {
    return (
         <section className="home" id="Home">

            <div className="home-container">

                <div className="home-content">
                    <p className="intro">HELLO, I'M</p>

                    <h1>YUVARANI</h1>

                    <h2>Mern Stack Developer</h2>

                    <p className="description">
                        I build clean and user-friendly websites
                        using modern web technologies.
                    </p>

               <div className="home-buttons">
    <a href="#Project" className="primary-btn">
        View My Work
    </a>

    <a href="#Contact_us" className="secondary-btn">
        Contact Me
    </a>
</div>
                </div>

             
<div className="home-image">
    <img
        src="/images/profile.jpg"
        alt="Yuvarani - Frontend Developer"
        className="profile-image"
    />
</div>


            </div>

        </section>
    );
}

export default Home;
