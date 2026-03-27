import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import './Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <h2><Link to='/'>SWBJ</Link></h2>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact Us</Link> 
            </div>
            <div className="navbar-cart">
                <Link to="/cart"><FaShoppingCart /></Link>                
            </div>     
                
            
        </nav>
    )
}

export default Navbar