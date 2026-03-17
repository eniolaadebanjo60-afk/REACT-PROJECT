import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <h2><Link to='/'>Brew & <span>Bloom</span></Link></h2>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/service">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar