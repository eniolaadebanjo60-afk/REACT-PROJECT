import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/navbar'
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
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )

}



export default App