import './Home.css'
import aboutImg from '../assets/about-img.jpg'

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
        </div>
    )
}

export default Home