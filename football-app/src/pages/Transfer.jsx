import { useState } from 'react'
import './Transfer.css'


function Transfer(){
    const [query, setQuery] = useState('')
    const [transfers, setTransfers] = useState([])
    const [playerName, setPlayerName] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const searchPlayer = async () => {
        if(!query) return
        setLoading(true)
        setError(null)
        setTransfers([])
        try {
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
            const players = data.results.filter(r => r.type === 'player')
            if(players.length === 0){
                setError('No player found.')
                setLoading(false)
                return
            }
            const playerId = players[0].entity.id
            const name = players[0].entity.name
            setPlayerName(name)
            fetchTransfers(playerId)
        } catch(error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const fetchTransfers = async (playerId) => {
        try {
            const response = await fetch(
                `https://sofascore.p.rapidapi.com/players/get-transfer-history?playerId=${playerId}`,
                {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                        'x-rapidapi-host': 'sofascore.p.rapidapi.com'
                    }
                }
            )
            const data = await response.json()
            if(data.transferHistory && data.transferHistory.length > 0){
                setTransfers(data.transferHistory)
                setLoading(false)
            } else {
                setError('No transfer history found.')
                setLoading(false)
            }
        } catch(error) {
            setError(error.message)
            setLoading(false)
        }
    }

    return(
        <div className='transfers'>
            <h1>Transfer <span>History</span></h1>

            <div className='search-bar'>
                <input
                    type='text'
                    placeholder='Search for a player...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && searchPlayer()}
                />
                <button onClick={searchPlayer}>Search</button>
            </div>

            {loading && <div className='loading'><p>Loading transfers...</p></div>}
            {error && <div className='error'><p>{error}</p></div>}

            {transfers.length > 0 && (
                <div className='transfer-container'>
                    <h2>{playerName}'s Transfer History</h2>
                    {transfers.map((transfer) => (
                        <div key={transfer.id} className='transfer-row'>
                            <img
                                src={`https://api.sofascore.com/api/v1/player/${transfer.player.id}/image`}
                                alt={transfer.player.name}
                                width={40}
                                height={40}
                                onError={(e) => {
                                    e.target.onerror = null
                                    e.target.src = 'https://ui-avatars.com/api/?name=' + transfer.player.name + '&background=ff6b00&color=fff&size=40&rounded=true'
                                }}
                            />
                            <p className='transfer-date'>
                                {new Date(transfer.transferDateTimestamp * 1000).toLocaleDateString()}
                            </p>
                            <p className='transfer-from'>{transfer.fromTeamName}</p>
                            <span className='arrow'>➡</span>
                            <p className='transfer-to'>{transfer.toTeamName}</p>
                            <p className='transfer-fee'>{transfer.transferFeeDescription}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Transfer