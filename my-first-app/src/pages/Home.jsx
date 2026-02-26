import './Home.css'
import aboutImg from '../assets/about-img.jpg'
import capuccino from '../assets/capuccino.jpg'
import croissantImg from '../assets/croissant.jpg'
import latteImg from '../assets/latte.jpg'
import yoghurtImg from '../assets/yoghurt.jpg'
import greenImg from '../assets/tea.jpg'

function Home(){
    return(
        <div className='home'>
            <div className='hero'>
                <h1>Welcome to <span>Brew & Bloom</span></h1>
                <p>A warm place to sip, relax and bloom.</p>
                <button className='hero-btn'>Explore Our Menu</button>
            </div>

            <div className='hero-abt'>
                <div className='abt-text'>
                    <h1>About <span>Us</span></h1>
                    <p>Brew & Bloom was founded in 2018 by two coffee lovers 
                    who believed that a great cup of coffee could make any day better.</p>
                    <p>We source our beans from local farmers, roast them with care and serve every cup with love. 
                    Come in, sit down and bloom with us.</p>
                </div>

                <div className='abt-img'>
                    <img src={aboutImg} width={200} height={200} alt='Ceo' />
                    <div className='abt-ceo'>
                        <h2>"Coffee is not just a drink, it is a feeling."</h2>
                        <p>- John Bloom, CEO</p>
                    </div>
                </div>
            </div>    

            <div className='hero-service'>
                <h2>Our <span>Services</span></h2>
                <p>We Offer This Services:</p>
                <div className='service-card'>
                    <div className='card-content'>
                        <img src={capuccino} width={200} height={200} alt='Capuccino' />
                        <p>Capuccino</p>
                    </div>

                    <div className='card-content'>
                        <img src={latteImg} width={200} height={200} />
                        <p>Latte</p>
                    </div>

                    <div className='card-content'>
                        <img src={greenImg} width={200} height={200} />
                        <p>Green Tea</p>
                    </div>

                    <div className='card-content'>
                        <img src={croissantImg} width={200} height={200} alt='croissant' />
                        <p>Croissant</p>
                    </div>

                    <div className='card-content'>
                        <img src={yoghurtImg} width={200} height={200} />
                        <p>Yoghurt</p>
                    </div>
                </div>
            </div>

            <div className='hero-contact'>
                <h2>Get in touch with us</h2>
                <p>Help us help you</p>
                <form className='contact-form'>
                    <input type='text' placeholder='Your Name' />
                    <input type='tel' placeholder='Your phone number' />
                    <input type='email' placeholder='Your Email Address' />
                    <textarea placeholder='Your concern'></textarea>
                    <button type='submit'>Send Your Message</button>
                </form>
            </div>
        </div>
    )
}

export default Home