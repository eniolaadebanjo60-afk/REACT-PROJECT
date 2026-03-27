import './Footer.css'
import {Link} from "react-router-dom"
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter} from 'react-icons/fa6'

function Footer(){
    return(
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-logo'>
                    <h1>SWBJ</h1>
                    <a href='tel:+234 905 174 9728'>+234 905 174 9728</a>
                    <a href='mailto:eniolaadebanjo60@gmail.com'>eniolaadebanjo60@gmail.com</a>
                </div>

                <div className='footer-links'>
                    <h2>Quick Links</h2>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='contact'>Contact-Us</Link>
                        <Link to='/cart'>Cart</Link>
                    </ul>
                </div>

                <div className='footer-social'>
                    <h2>Follow us On:</h2>
                    <div className='social-icons'>
                        <FaFacebook />
                        <FaInstagram />
                        <a href=''><FaWhatsapp /></a>
                        <FaXTwitter />
                    </div>
                </div>    
            </div>

            <div className='footer-bottom'>
                <h2>© 2026 SWBJ. All rights reserved.</h2>
            </div>
        </div>
    )
}


export default Footer