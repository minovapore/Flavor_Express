import { useEffect, useState } from "react";
// import {BsStarHalf, BsStarFill, BsCart} from "react-icons/bs";
import {products} from '../product.js';

export default function Food({isCartVisible}){
    let fromLocalStorage;

    // Cerca di recuperare i dati dal localStorage
    try {
      const storedProducts = localStorage.getItem('products');
      fromLocalStorage = storedProducts ? JSON.parse(storedProducts) : {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 
        11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 
        20: 0, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 
        29: 0, 30: 0, 31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 
        38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 
        47: 0, 48: 0, 49: 0, 50: 0, 51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 
        56: 0, 57: 0, 58: 0, 59: 0, 60: 0, 61: 0, 62: 0, 63: 0, 64: 0, 
        65: 0, 66: 0, 67: 0, 68: 0, 69: 0, 70: 0, 71: 0, 72: 0, 73: 0, 
        74: 0, 75: 0, 76: 0, 77: 0, 78: 0, 79: 0, 80: 0, 81: 0, 82: 0, 
        83: 0, 84: 0
      };
    } catch (error) {
      console.error("Errore nel parsing dei dati da localStorage:", error);
      // Se c'è un errore, inizia con i valori di default
      fromLocalStorage = {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 
        11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 
        20: 0, 21: 0, 22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0, 
        29: 0, 30: 0, 31: 0, 32: 0, 33: 0, 34: 0, 35: 0, 36: 0, 37: 0, 
        38: 0, 39: 0, 40: 0, 41: 0, 42: 0, 43: 0, 44: 0, 45: 0, 46: 0, 
        47: 0, 48: 0, 49: 0, 50: 0, 51: 0, 52: 0, 53: 0, 54: 0, 55: 0, 
        56: 0, 57: 0, 58: 0, 59: 0, 60: 0, 61: 0, 62: 0, 63: 0, 64: 0, 
        65: 0, 66: 0, 67: 0, 68: 0, 69: 0, 70: 0, 71: 0, 72: 0, 73: 0, 
        74: 0, 75: 0, 76: 0, 77: 0, 78: 0, 79: 0, 80: 0, 81: 0, 82: 0, 
        83: 0, 84: 0
      };
    }

    const [cartItems, setCartItems] = useState(fromLocalStorage);


    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] + 1}));
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: 0}));
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const key in cartItems){
            if(cartItems[key] > 0){
                let itemInfo = products.find(product => product.id === Number(key));
                totalAmount += Math.floor(cartItems[key] * itemInfo.price);
            }
        }
        return totalAmount;
    }
    
    return(
        <div className="my-12 max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12" id="food">
            {isCartVisible && (
                <div className={"z-10 fixed p-4 right-0 top-[80px] bg-primary w-72 h-screen overflow-y-scroll"}>
                    <p className="text-2xl font-bold">Il tuo ordine: {getTotalAmount()}€</p>
                    {products.map(product => {
                        if(cartItems[product.id] !==0){
                            return  <div key={product.id} className="relative glass my-3 grid grid-cols-5
                                    overflow-hidden">
                                        <img className="rounded-lg w-[100px] h-[100px] object-cover col-span-2" src={product.image} alt="img" />
                                        <div>
                                            <p className="text-xl font-bold pl-2">{cartItems[product.id]} X</p>
                                            <p className="flex items-center space-x-4">{product.name}</p>
                                            <p>{product.price}€</p>
                                        </div>
                                        <div className="absolute right-0 bottom-0 gap-2 font-bold">
                                            <button onClick={() => removeFromCart(product.id)} className="text-red-600 bg-red-300 p-2 rounded">Rimuovi</button>
                                        </div>
                                    </div>
                        }
                    })}
                </div>
            )}
            <h2 className="text-3xl p-4 w-full text-start">Food</h2>
            <div className="grid xl:grid-cols-3 place-items-center gap-6">
            {products.map(product => (
                <div key={product.id} className="w-[380px] p-5 bg-white rounded-lg transition-all duration-200 hover:scale-110">
                    <img className="rounded-lg w-[400px] h-[220px] object-cover" src={product.image} alt="img" />
                    <div className="flex flex-rpw justify-between items-center mt-5 gap-3">
                        <h2 className="font-semibold text-xl">{product.name}</h2>
                        <div className="flex">
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                            <li>ciao</li>
                        </div>
                        <h3 className="font-semibold text-lg">{product.price}€</h3>
                        <button onClick={() => {addToCart(product.id)}} className="p-3 text-2xl w-14 rounded-xl bg-primary">Aggiungi</button>
                        {/* {cartItems[product.id] > 0 && <div className='absolute flex items-center justify-center top-5 left-5 bg-green-600 font-bold rounded-lg h-12 w-12 '>{cartItems[product.id]}</div>} */}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}