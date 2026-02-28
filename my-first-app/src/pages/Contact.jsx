import './Contact.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Contact(){
    return(
        <div className='contact'>
            <h1>Contact Us</h1>
            <div className="contact-page">
                <div className="contact-text">
                    <p>Address: 123 Bloom Street, Coffee Town</p>
                    <p>Tel: +1 234 567 8900</p>
                    <p>Email: hello@brewandbloom.com</p>
                    <p>Opening Hours (Weekdays): Mondays - Fridays (7am - 4pm)</p>
                    <p>Opening Hours (Weekends): Saturday - Sunday (9am - 6pm) </p>
                </div>

                <form className='contact-form'>
                    <input type='text' placeholder='Your Name' />
                    <input type='tel' placeholder='Your phone number' />
                    <input type='email' placeholder='Your Email Address' />
                    <textarea placeholder='Your concern'></textarea>
                    <button type='submit'>Send Your Message</button>
                </form>
            </div>
            
            <div className='social-links'>
                <h2>Reach Out to Us Via:</h2>
                <div className='social-icons'>
                    <a href='mailto:hello@brewandbloom.com'><MdEmail /></a>
                    <a href='https://instagram.com' target='_blank'><FaInstagram /></a>
                    <a href='https://wa.me/12345678900' target='_blank'><FaWhatsapp /></a>
                    <a href='https://x.com' target='_blank'><FaXTwitter /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact