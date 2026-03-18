import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Player from './components/Player'
import Home from './pages/Home'
import Search from './pages/Search'
import { useState } from 'react'
import './App.css'

function Layout({ children, currentTrack, setCurrentTrack }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar />
      {children}
      {!isHome && <Player currentTrack={currentTrack} />}
    </>
  )
}

function App() {
  const [currentTrack, setCurrentTrack] = useState(null)

  return (
    <BrowserRouter>
      <Layout currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search setCurrentTrack={setCurrentTrack} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App