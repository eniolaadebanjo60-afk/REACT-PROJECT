import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App (){
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )

}



export default App