import { useState } from "react"
import './Players.css'

function Player(){
    const [query, setQuery] = useState('')
    const [players, setPlayers] = useState ([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

        const searchPlayers = async () => {
            setLoading(true)
            setError(null)
            try{
                const response = await fetch(
                    `https://sofascore.p.rapidapi.com/search?q=${query}&type=player-team-persons&page=0`,
                    {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                            'x-rapidapi-host': 'sofascore.p.rapidapi.com'
                        }
                    }
                )
                const data = await response.json()
                console.log(data)
                if(data.results){
                    setPlayers(data.results.filter(result => result.type === 'player'))
                    setLoading(false)    
                }
                else {
                    setError('No Player Found')
                    setLoading(false)
                }    
            } catch (error) {
                console.error(error)
                setError(error.message)
                setLoading(false)
            }
        }

    return(
    <div className='players'>
        <h1>Player-<span>Search</span></h1>
        <div className='search-bar'>
            <input 
                type='text'
                placeholder='Search for a player...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && searchPlayers()}
            />
            <button onClick={searchPlayers}>Search</button>
        </div>
        {loading ? (
            <div className='loading'>
                <p>Searching for players...</p>
            </div>
        ) : error ? (
            <div className='error'>
                <p>{error}</p>
            </div>
        ) : (
            <div className='players-container'>
                {players.map((result) => (
                    <div key={result.entity.id} className='player-card'>
                        <img 
                            src={`https://api.sofascore.com/api/v1/player/${result.entity.id}/image`}
                            alt={result.entity.name}
                            width={80}
                            height={80}
                            onError={(e) => {
                                e.target.onerror = null
                                e.target.src = 'https://ui-avatars.com/api/?name=' + result.entity.name + '&background=ff6b00&color=fff&size=80&rounded=true'
                            }}
                        />
                        <h3>{result.entity.name}</h3>
                        <p>Club: {result.entity.team?.name || 'No Team'}</p>
                        <p>Nationality: {result.entity.country?.name || 'Unknown'}</p>
                        <p>Position: {result.entity.position || 'Unknown'}</p>
                        <p>Jersey Number: {result.entity.jerseyNumber || 'N/A'}</p>
                    </div>
                ))}
            </div>
        )}
    </div>
)
}
export default Player