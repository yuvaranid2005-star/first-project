import "./Navbar.css"; 
function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">Yuvarani</h2>
            <div className="nav-links">
                <a href="#Home">Home</a>
                <a href="#About_us">About</a>
                <a href="#Skills">Skills</a>
                <a href="#Project">Projects</a>
                <a href="#Contact_us">Contact</a>
            </div>
        </nav>
    )
}
export default Navbar