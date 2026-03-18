import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar (){
    return(
        <nav className="nav-bar">
            <div className="navbar-logo">
                <Link to='/'>Music<span>Corner</span></Link>
            </div>
            <div className="navbar-links">
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>
            </div>
        </nav>
    )
}

export default Navbar