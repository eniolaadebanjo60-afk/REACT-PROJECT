import { useState, useEffect } from 'react'
import './Livescore.css'

function Livescore(){
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMatches = async () => {
            try{
                const response = await fetch(
                    'https://sofascore.p.rapidapi.com/tournaments/get-live-events?sport=football',
                    {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                            'x-rapidapi-host': 'sofascore.p.rapidapi.com'
                        }
                    }
                )
                const data = await response.json()
                if(data.events){
                    setMatches(data.events)
                    setLoading(false)    
                } else {
                    setError('No live matches right now.')
                    setLoading(false)
                }    
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchMatches()
    }, [])

    const groupedMatches = matches.reduce((groups, match) => {
        const league = match.tournament.name
        if(!groups[league]){
            groups[league] = []
        }
        groups[league].push(match)
        return groups
    }, {})

    return(
        <div className='home'>
            <h1>Live-<span>Scores</span></h1>
            <div className='match-container'>
                {loading ? (
                    <div className='loading'>
                        <p>Please wait while we load live scores...</p>
                    </div>
                ) : error ? (
                    <div className='error'>
                        <p>{error}</p>
                    </div>
                ) :
                Object.entries(groupedMatches).map(([leagueName, leagueMatches]) => (
                    <div key={leagueName}>
                        <p className='league-name'>{leagueName}</p>
                        {leagueMatches.map((match) => (
                            <div key={match.id} className='match-card'>
                                <div className='match-info'>
                                    <h3>{match.homeTeam.name}</h3>
                                    <p className='score'>{match.homeScore.current} - {match.awayScore.current}</p>
                                    <h3>{match.awayTeam.name}</h3>
                                </div>
                                <p className='match-status'>{match.status.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Livescore