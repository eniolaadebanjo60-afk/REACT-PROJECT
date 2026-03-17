import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Fixture from './pages/Fixtures'
import Standing from './pages/Standings'
import Player from './pages/Players'
import Transfer from './pages/Transfer'
import Livescore from './pages/Livescore'
import Footer from './components/Footer'
import './App.css'
function App (){
  return(
    <BrowserRouter>
    <div className='App'>
      <Navbar />
      <div className='App-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/livescore' element={<Livescore />} />
          <Route path='/fixtures' element={<Fixture />} />
          <Route path='/standings' element={<Standing />} />
          <Route path='/players' element={<Player />} />
          <Route path='/transfers' element={<Transfer />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App