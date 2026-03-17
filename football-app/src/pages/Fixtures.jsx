import { useState, useEffect } from 'react'
import './Fixtures.css'

function Fixture(){
    const [matches, setMatches] = useState([])
    const [category, setCategory] = useState({name: 'Premier League', id: 1})
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMatches = async () => {
            setLoading(true)
            setError(null)
            try{
                const response = await fetch(
                    `https://sofascore.p.rapidapi.com/tournaments/get-scheduled-events?categoryId=${category.id}&date=${date}`,
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
                if(data.events && data.events.length > 0){
                    setMatches(data.events)
                    setLoading(false)    
                } else {
                    setError('No matches scheduled for this day.')
                    setLoading(false)
                }
            } catch (error) {
                console.error(error)
                setError(error.message)
                setLoading(false)
            }
        }

        fetchMatches()
    }, [date, category])
    return(
        <div className='fixtures'>
            <h1>{category.name}</h1>
            <div className='league-selector'>
                    <select onChange={(e) => {
                        const categories = {
                            '🏴󠁧󠁢󠁥󠁮󠁧󠁿 England': {name: 'England', id: 1},
                            '🇪🇸 Spain': {name: 'Spain', id: 32},
                            '🇮🇹 Italy': {name: 'Italy', id: 31},
                            '🇩🇪 Germany': {name: 'Germany', id: 30},
                            '🇫🇷 France': {name: 'France', id: 7},
                        }
                        setCategory(categories[e.target.value])
                    }}>
                        <option>🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</option>
                        <option>🇪🇸 Spain</option>
                        <option>🇮🇹 Italy</option>
                        <option>🇩🇪 Germany</option>
                        <option>🇫🇷 France</option>
                    </select>
                </div>
            <div className='date-picker'>
                <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />    
            </div>
            <div className='match-container'>
                {loading ? (
                    <div className='loading'>
                        <p>Please Wait....</p>
                    </div>    
                ) :error ? (
                    <div className='error'>
                        <p>{error}....</p>
                    </div>
                ):
                matches.map((match)=> (
                    <div key={match.id} className='match-card'>
                        <p>{match.tournament.name}</p>
                        <p>{new Date(match.startTimestamp * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
                        <div className='match-info'>
                            <h3>{match.homeTeam.name}</h3>
                            <p>{match.homeScore.current} vs {match.awayScore.current}</p>
                            <h3>{match.awayTeam.name}</h3>
                        </div>
                        <p className='match-status'>{match.status.description}</p> 
                    </div>       
                ))
            }
            </div>
        </div>
    )
}

export default Fixture