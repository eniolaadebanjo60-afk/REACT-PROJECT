import { useState, useEffect, useRef } from 'react'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri'
import { FaPlay, FaPause } from 'react-icons/fa'
import './Player.css'

function Player({ currentTrack }){
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        if(currentTrack){
            audioRef.current.src = currentTrack.previewUrl
            audioRef.current.play()
            setIsPlaying(true)
        }
    }, [currentTrack])

    const togglePlay = () => {
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    const handleProgress = () => {
        const duration = audioRef.current.duration
        const currentTime = audioRef.current.currentTime
        setProgress((currentTime / duration) * 100)
    }

    const handleSeek = (e) => {
        const duration = audioRef.current.duration
        const seekTime = (e.target.value / 100) * duration
        audioRef.current.currentTime = seekTime
        setProgress(e.target.value)
    }

    if(!currentTrack) return null

    return(
        <>
            <audio
                ref={audioRef}
                onTimeUpdate={handleProgress}
                onEnded={() => setIsPlaying(false)}
            />


            {isExpanded && (
                <div className='player-expanded'>
                    <button className='minimize-btn' onClick={() => setIsExpanded(false)}><RiArrowDownSLine size={24} /></button>
                    <img src={currentTrack.artworkUrl100.replace('100x100', '600x600')} alt={currentTrack.trackName} className='expanded-img'/>
                    <h2>{currentTrack.trackName}</h2>
                    <p>{currentTrack.artistName}</p>
                    <p className='album-name'>{currentTrack.collectionName}</p>
                    <input
                        type='range'
                        min='0'
                        max='100'
                        value={progress}
                        onChange={handleSeek}
                        className='progress-bar expanded-progress'
                    />
                    <button className='play-pause large' onClick={togglePlay}>
                        {isPlaying ? <FaPause/> : <FaPlay/>}
                    </button>
                    <p className='preview-tag'>30 Second Preview</p>
                </div>
            )}

        
            {!isExpanded && (
                <div className='player'>
                    <div className='player-left' onClick={() => setIsExpanded(true)}>
                        <img src={currentTrack.artworkUrl100} alt={currentTrack.trackName} />
                        <div className='player-track-info'>
                            <h4>{currentTrack.trackName}</h4>
                            <p>{currentTrack.artistName}</p>
                        </div>
                    </div>
                    <div className='player-center'>
                        <button className='play-pause' onClick={togglePlay}>
                            {isPlaying ? <FaPause/> : <FaPlay/>}
                        </button>
                        <input
                            type='range'
                            min='0'
                            max='100'
                            value={progress}
                            onChange={handleSeek}
                            className='progress-bar'
                        />
                    </div>
                    <div className='player-right'>
                       <button className='expand-btn' onClick={() => setIsExpanded(true)}>
                            <RiArrowUpSLine size={24} />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Player