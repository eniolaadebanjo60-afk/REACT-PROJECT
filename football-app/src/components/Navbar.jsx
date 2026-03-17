import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <h2>Soccer<span>Hub⚽️</span></h2>
            <div className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/livescore'>Livescore</Link>
                <Link to='/fixtures'>Fixtures</Link>
                <Link to='/standings'>Standings</Link>
                <Link to='/players'>Players</Link>
                <Link to='/transfers'>Transfers</Link>
            </div>
        </nav>
    )
}

export default Navbar