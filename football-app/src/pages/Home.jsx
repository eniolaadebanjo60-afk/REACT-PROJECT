import { Link } from "react-router-dom"
import './Home.css'

function Home (){
    return(
        <div className="home-page">
            <div className="hero">
                <div className="hero-content">
                    <h1>Welcome To <span>Soccer-Hub</span></h1>
                    <p>Your one-stop destination for live scores, fixtures, standings and more.</p>
                    <Link to='/livescore' className='hero-btn'>Follow Live Scores</Link>
                </div>
            </div>

            <div className="stats">
                <div className="stats-item">
                    <h2>5+</h2>
                    <p>Leagues Covered</p>
                </div>
                 <div className="stats-item">
                    <h2>Live</h2>
                    <p>Real-Time Scores</p>
                </div>
                 <div className="stats-item">
                    <h2>1000+</h2>
                    <p>Players Searchable</p>
                </div>
                 <div className="stats-item">
                    <h2>Free & Easy to use</h2>
                    <p>Always free and very user-friendly</p>
                </div>
            </div>

            <div className="featured-leagues">
                <h2>Featured <span>Leagues</span></h2>
                <div className='leagues-grid'>
                    <div className='league-card'>
                        <img src='https://api.sofascore.com/api/v1/unique-tournament/17/image' alt='Premier League'/>
                        <p>Premier League</p>
                    </div>
                    <div className='league-card'>
                        <img src='https://api.sofascore.com/api/v1/unique-tournament/8/image' alt='La Liga'/>
                        <p>La Liga</p>
                    </div>
                    <div className='league-card'>
                        <img src='https://api.sofascore.com/api/v1/unique-tournament/23/image' alt='Serie A'/>
                        <p>Serie A</p>
                    </div>
                    <div className='league-card'>
                        <img src='https://api.sofascore.com/api/v1/unique-tournament/35/image' alt='Bundesliga'/>
                        <p>Bundesliga</p>
                    </div>
                    <div className='league-card'>
                        <img src='https://api.sofascore.com/api/v1/unique-tournament/34/image' alt='Ligue 1'/>
                        <p>Ligue 1</p>
                    </div>
                    <div className='league-card'>
                        <img src='https://api.sofascore.com/api/v1/unique-tournament/7/image' alt='Champions League'/>
                        <p>Champions League</p>
                    </div>
                </div>
            </div>    

            <div className='quick-nav'>
                <h2>Explore <span>Soccer-Hub</span></h2>
                <div className='nav-cards'>
                    <Link to='/livescore' className='nav-card'>
                        <div className='icon'>🔴</div>
                        <h3>Live Scores</h3>
                        <p>Follow matches as they happen in real time</p>
                    </Link>
                    <Link to='/fixtures' className='nav-card'>
                        <div className='icon'>📅</div>
                        <h3>Fixtures</h3>
                        <p>See upcoming matches by date and league</p>
                    </Link>
                    <Link to='/standings' className='nav-card'>
                        <div className='icon'>🏆</div>
                        <h3>Standings</h3>
                        <p>Check the latest league tables</p>
                    </Link>
                    <Link to='/players' className='nav-card'>
                        <div className='icon'>⚽</div>
                        <h3>Players</h3>
                        <p>Search for any player in the world</p>
                    </Link>
                    <Link to='/transfers' className='nav-card'>
                        <div className='icon'>🔄</div>
                        <h3>Transfers</h3>
                        <p>Stay up to date with the latest transfer news</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home