import { useState } from 'react'
import './App.css'
import Home from './Home'
import About_us from './About_us'
import Skills from './Skills'
import Project from './Project'
import Contact_us from './Contact_us'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <Navbar/>
    <Home/>
    <About_us/>
    <Skills/>
    <Project/>
    <Contact_us/>
    <Footer/>
    </>
  )
}

export default App
