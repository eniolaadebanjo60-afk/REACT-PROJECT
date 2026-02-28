import { Link } from "react-router-dom"
import './Footer.css'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter} from 'react-icons/fa6'

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <h2>Brew & <span>Bloom</span></h2>
                    <p>123 Bloom Street, Coffee Town</p>
                    <p>Tel: +1 234 567 8900</p>
                    <p>hello@brewandbloom.com</p>
                </div>

                <div className='footer-links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icon">
                        <FaInstagram />
                        <FaFacebook />
                        <FaWhatsapp />
                        <FaXTwitter />
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>© 2026 Brew & Bloom. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer