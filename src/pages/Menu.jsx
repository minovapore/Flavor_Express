import { useState, useEffect } from 'react'
import Food from '../components/Food';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer'

export default function Menu(){
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [cartItems, setCartItems] = useState({
      pizze: {},
      panini: {},
      insalate: {},
      sushi: {},
      fritti: {},
      dolci: {},
      bevande: {},
    });

    const toggleCartVisibility = () => {
      setIsCartVisible(prev => !prev);
    }

    const getCartCount = () => {
      let totalItems = 0;
      for (const category in cartItems) {
        for (const id in cartItems[category]) {
          totalItems += cartItems[category][id];
        }
      }
      return totalItems;
    };

    return(
        <>
        <Navbar2  toggleCartVisibility={toggleCartVisibility}  cartCount={getCartCount()}/>
        <Food isCartVisible={isCartVisible} cartItems={cartItems} setCartItems={setCartItems}/>
        <Footer/>
        </>
    );
}