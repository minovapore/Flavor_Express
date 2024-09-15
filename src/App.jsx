import { useState } from 'react'
import './App.css'
import Food from './components/Food'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const toggleCartVisibility = () => {
    setIsCartVisible(prev => !prev);
  }

  return (
    <>
     <Navbar toggleCartVisibility={toggleCartVisibility}/>
     <Hero2/>
     <Food isCartVisible={isCartVisible}/>
    </>
  )
}

export default App
