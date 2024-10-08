import { useState } from 'react'
import Food from '../components/Food';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

export default function Menu(){
    
    const [isCartVisible, setIsCartVisible] = useState(false);
    const toggleCartVisibility = () => {
      setIsCartVisible(prev => !prev);
    }

    return(
        <>
        <Navbar  toggleCartVisibility={toggleCartVisibility}/>
        <Food isCartVisible={isCartVisible}/>
        <Footer/>
        </>
    );
}