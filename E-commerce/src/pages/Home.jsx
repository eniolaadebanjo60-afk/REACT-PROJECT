import './Home.css'
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className='home'>
            <div className='hero'>
                <div className='hero-content'>
                    <h2>New Summer <span>Collections</span></h2>
                    <h1>Shop The Best Products From Around The World</h1>
                    <p>Discover thousands of products at the best prices.
                    From electronics to fashion, we have everything you need delivered to your doorstep.</p>
                    <Link to='/shop'>Shop Now</Link>              
                </div>
            </div>

            <div className='about'>
                <h1>About <span>Us</span></h1>
                <div className='about-card'>
                    <p>We offer Services Like Never Before</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Home