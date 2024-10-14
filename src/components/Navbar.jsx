import '../style/Navbar.css';
// import '../style/Global.css';
import logo from '../assets/img/logo.png';
import { FaShoppingCart } from "react-icons/fa";
import React, { useEffect, useRef} from 'react';
import { gsap } from 'gsap';

export default function Navbar({toggleCartVisibility, cartCount}){
    // Creiamo i riferimenti per il titolo e l'immagine
    const logoRef = useRef(null);
    const cartRef = useRef(null);

    useEffect(() => {
        // Animiamo il titolo e l'immagine all'apertura del sito
        gsap.fromTo(
            logoRef.current, 
            { scale: 0 }, 
            { scale: 1, duration: 1.5, ease: 'power3.out' }
        );

        gsap.fromTo(
            cartRef.current, 
            { scale: 0 }, 
            { scale: 1, duration: 1.5, ease: 'power3.out' }
        );
    }, []);

    return(
        <div className="navbar bg-sec txt-det w-full">
            <div className="navbar-start">
                <div ref={logoRef} className="ms-5">
                    <a href="/"><img src={logo} alt="Flavor Express" className='w-60 z-auto'/></a>
                </div>
            </div>
            <div className="navbar-end">
                <div ref={cartRef} className="relative me-5 text-3xl flex items-center"> {/* Aggiungi relative qui */}
                    <button onClick={toggleCartVisibility} className="relative">
                        <FaShoppingCart />
                    </button>
                        {cartCount > 0 && (
                            <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white rounded-full px-2 text-sm">
                                {cartCount}
                            </span>
                        )}
                </div>
            </div>
        </div>
    );
}