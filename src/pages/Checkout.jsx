import { useState, useEffect } from 'react';
import '../style/Form.css'
import { products } from '../product';

export default function Checkout(){
    // Cerca di recuperare i dati del carrello dal localStorage
    let fromLocalStorage;
    try {
    const storedProducts = localStorage.getItem('cart');
    fromLocalStorage = storedProducts ? JSON.parse(storedProducts) : {
        pizze: {},
        panini: {},
        insalate: {},
        sushi: {},
        fritti: {},
        dolci: {},
        bevande: {}
    };
    } catch (error) {
        console.error("Errore nel parsing dei dati da localStorage:", error);
        // Se c'è un errore, inizia con i valori di default
        fromLocalStorage = {
            pizze: {},
            panini: {},
            insalate: {},
            sushi: {},
            fritti: {},
            dolci: {},
            bevande: {}
        };
    }
    
    const [cartItems, setCartItems] = useState(fromLocalStorage);

    // Aggiorna il localStorage quando il carrello cambia
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    
     // Calcola il totale dell'ordine
    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const category in cartItems) {
            for (const id in cartItems[category]) {
                if (cartItems[category][id] > 0) {
                    const itemInfo = products[category].find(item => item.id === Number(id));
                    totalAmount += cartItems[category][id] * itemInfo.price;
                }
            }
        }
        return totalAmount.toFixed(2);
    };

     // Gestione del carrello vuoto
    if (!cartItems || Object.keys(cartItems).length === 0 || getTotalAmount() === "0.00") {
        return (
            <div className="checkout-container">
                <h2>Completa il tuo ordine</h2>
                <p>Il carrello è vuoto.</p>
            </div>
        );
    }

    return(
        <>
        <div className="checkout-container">
            <h2>Completa il tuo ordine</h2>
            <div className='grid grid-cols-2 '>
            <div className='flex justify-center'>
            <div className="order-summary">
                <h3>Riepilogo del tuo ordine</h3>
                {Object.keys(cartItems).map(category => (
                    products[category].map(product => {
                        if (cartItems[category][product.id] > 0) {
                            return (
                                <div key={product.id} className="order-item w-[100px] h-[100px] flex items-center">
                                    <img src={product.image} alt={product.name} className="order-item-image object-contain" />
                                    <div className="order-item-details">
                                        <p className='line-clamp-2 w-[100px]'>{cartItems[category][product.id]} X {product.name}</p>
                                        <p>{(product.price * cartItems[category][product.id]).toFixed(2)}€</p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })
                ))}
                <div className="total-amount">
                    <p>Totale: {getTotalAmount()}€</p>
                </div>
            </div>
            <div>
            </div>
                <h2>ciao</h2>
                <h2>ciao</h2>
            </div>
            </div>
            <button className="btn btn-complete-order">Conferma ordine</button>
        </div>
        </>
    );
}