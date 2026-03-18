import { useEffect, useState } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa'
import './Search.css'

function Search ({setCurrentTrack}){
    const [query, setQuery] = useState('')
    const [tracks, setTracks] = useState([])
    const [trending, setTrending] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() =>{
        const fetchTrending = async ()=> {
            try{
                const response = await fetch(
                    'https://itunes.apple.com/search?term=top+hits+2025&limit=20&entity=song'
                )
                const data =await response.json()
                setTrending(data.results)
            }catch(error){
                console.error(error)
            }
        }
        fetchTrending()
    },[])

    const searchTracks = async ()=> {
        if(!query) return
        setLoading(true)
        setError(null)
        try{
            const response = await fetch(
                `https://itunes.apple.com/search?term=${query}&limit=20&entity=song`
            )
            const data =await response.json()
            if(data.results.length>0){
                setTracks(data.results)
                setLoading(false)
            } else{
                setError('No Songs Found')
                setLoading(False)
            }
        } catch(error) {
            setError(error.message)
            setLoading(false)
        }
    }
    const displayTracks =tracks.length > 0 ? tracks:trending

    return(
        <div className='search'>
            <div className='search-section'>
                <input
                    type='text'
                    placeholder='Search for songs, artists, albums...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && searchTracks()}
                />
                <button onClick={searchTracks}>Search</button>
            </div>

            <h2>{tracks.length > 0 ? 'Search Results' : 'Trending Now'}</h2>

            {loading && <div className='loading'><p>Searching...</p></div>}
            {error && <div className='error'><p>{error}</p></div>}

            <div className='tracks-container'>
                {displayTracks.map((track) => (
                    <div
                        key={track.trackId}
                        className='track-card'
                        onClick={() => setCurrentTrack(track)}
                    >
                        <div className='track-image'>
                            <img src={track.artworkUrl100} alt={track.trackName} />
                            <div className='play-overlay'><FaPlay/></div>
                        </div>
                        <div className='track-info'>
                            <h3>{track.trackName}</h3>
                            <p>{track.artistName}</p>
                            <p>{track.collectionName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Search