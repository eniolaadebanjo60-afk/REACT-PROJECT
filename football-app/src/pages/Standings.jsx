import { useState, useEffect } from "react"
import './Standings.css'

function Standing(){
    const [standings, setStandings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [league, setLeague] = useState({
    name: 'Premier League',
    tournamentId: 17,
    seasonId: 76986
})

    useEffect(() => {
        const fetchStandings = async () => {
            setLoading(true)
            setError(null)
            try{
                const response = await fetch(
                    `https://sofascore.p.rapidapi.com/tournaments/get-standings?tournamentId=${league.tournamentId}&seasonId=${league.seasonId}&type=total`,
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
                if(data.standings){
                    setStandings(data.standings[0].rows)
                    setLoading(false)    
                }
                else {
                    setError('No data found')
                    setLoading(false)
                }    
            } catch (error) {
                console.error(error)
                setError(error.message)
                setLoading(false)
            }
        }
        
        fetchStandings()
    }, [league])


    return(
        <div className="standings">
            <div className='standings-header'>
                <img 
                    src={`https://api.sofascore.com/api/v1/unique-tournament/${league.tournamentId}/image`} 
                    alt={league.name}
                    width={50}
                    height={50}
                />
                <h1>{league.name} Standings</h1>
            </div>
            <p>25/26 Season</p>
            <div className='league-selector'>
                <select onChange={(e) => {
                    const leagues = {
                        'Premier League 🏴󠁧󠁢󠁥󠁮󠁧󠁿': {name: 'Premier League', tournamentId: 17, seasonId: 76986},
                        'La Liga 🇪🇸': {name: 'La Liga', tournamentId: 8, seasonId: 77559},
                        'Serie A 🇮🇹': {name: 'Serie A', tournamentId: 23, seasonId: 76457},
                        'Bundesliga 🇩🇪': {name: 'Bundesliga', tournamentId: 35, seasonId: 77333},
                        'Ligue 1 🇫🇷': {name: 'Ligue 1', tournamentId: 34, seasonId: 77356},
                        'Champions League 🏆': {name: 'Champions League', tournamentId: 7, seasonId: 76953},
                    }
                setLeague(leagues[e.target.value])
            }}>
                <option>Premier League 🏴󠁧󠁢󠁥󠁮󠁧󠁿 </option>
                <option>La Liga 🇪🇸 </option>
                <option> Serie A 🇮🇹</option>
                <option> Bundesliga 🇩🇪</option>
                <option> Ligue 1 🇫🇷</option>
                <option> Champions League 🏆</option>
            </select>
        </div>
            {loading ? (
                <div className="loading">
                    <p>Please Wait While Loading.......</p>
                </div>    
            ) : error ? (
                <div className="error">
                    <p>Sorry, it's taking longer than expected, We suggest getting a good internet....</p>
                </div>
            ) : (
                <table className="standings-table">
                    <thead>
                        <tr>
                            <th>POS</th>
                            <th>Team</th>
                            <th>P</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((team)=>(
                            <tr key={team.id}>
                                <td>{team.position}</td>
                                <td>{team.team.name}</td>
                                <td>{team.matches}</td>
                                <td>{team.wins}</td>
                                <td>{team.losses}</td>
                                <td>{team.draws}</td>
                                <td>{team.scoresFor}</td>
                                <td>{team.scoresAgainst}</td>
                                <td>{team.scoreDiffFormatted}</td>
                                <td>{team.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }

        </div>
    )
}

export default Standing