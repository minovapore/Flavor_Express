import { useState } from 'react'
import './App.css'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const toggleCartVisibility = () => {
      setIsCartVisible(prev => !prev);
    }

  return (
    <>
        <Navbar toggleCartVisibility={toggleCartVisibility}/>
        <Hero/>
        {/* <Food isCartVisible={isCartVisible}/> */}
        <Footer/>
    </>  
      
  )
}

export default App
