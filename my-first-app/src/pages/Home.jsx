import './Home.css'

function Home(){
    return(
        <div className='home'>
            <div className='hero'>
                <h1>Welcome to <span>Brew & Bloom</span></h1>
                <p>A warm place to sip, relax and bloom.</p>
                <button className='hero-btn'>Explore Our Menu</button>
            </div>

            <div className='hero-abt'>
                <h1>About Us</h1>
                <p>Brew & Bloom was founded in 2018 by two coffee lovers 
                who believed that a great cup of coffee could make any day better.</p>
                <p>We source our beans from local farmers, roast them with care and serve every cup with love. 
                Come in, sit down and bloom with us.</p>
            </div>
        </div>
    )
}

export default Home