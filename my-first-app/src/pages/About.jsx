import aboutImg from '../assets/about-img.jpg'

function About(){
    return(
        <div className='hero-abt'>
            <div className='abt-text'>
                <h1>About <span>Us</span></h1>
                <p>Brew & Bloom was founded in 2018 by a coffee lover 
                who believed that a great cup of coffee could make any day better.</p>
                <p>Our beans is sourced from local farmers, we roast them with care and serve every cup with love. 
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
    )
}

export default About