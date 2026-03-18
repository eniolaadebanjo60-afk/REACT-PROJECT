import { Link } from 'react-router-dom'
import './Home.css'

function Home(){
    return(
        <div className='home'>
            <div className='home-content'>
                <div className='home-left'>
                    <h1>The Best Listening Experience</h1>
                    <h2>Your Music, <span>Your Rules</span></h2>
                    <p>Discover Millions of Musics, Playlists and Artistes all around the World</p>
                    <Link to='/search'>Start Your Listening</Link>
                </div>
            </div>

            <div className="stat">
                <div className="stat-item">
                    <h2>1M+</h2>
                    <p>Playlist To Discover</p>
                </div>
                 <div className="stat-item">
                    <h2>1B+</h2>
                    <p>Artistes To Listen to</p>
                </div>
                 <div className="stat-item">
                    <h2>100K+</h2>
                    <p>Genres Unlocked</p>
                </div>
                 <div className="stat-item">
                    <h2>Free & Easy to use</h2>
                    <p>Very User Friendly</p>
                </div>
            </div>
        </div>
    )
}

export default Home