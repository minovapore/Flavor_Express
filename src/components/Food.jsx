import { useEffect, useState } from "react";
// import {BsStarHalf, BsStarFill, BsCart} from "react-icons/bs";
import {products} from '../product.js';
import '../style/Food.css';
import CategorySection from "./CategorySection.jsx";

export default function Food({isCartVisible}){
    // const products = products;

    let fromLocalStorage;

    // Cerca di recuperare i dati dal localStorage
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


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (category, id) => {
        setCartItems(cartItems => ({
            ...cartItems,
            [category]: {
                ...cartItems[category],
                [id]: (cartItems[category][id] || 0) + 1
            }
        }));
    };

    const removeFromCart = (category, id) => {
        setCartItems(cartItems => ({...cartItems, [category]: {...cartItems[category], [id]: 0}}));
    };

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const category in cartItems){
            for (const id in cartItems[category]){
            if(cartItems[category][id] > 0){
                const itemInfo = products[category].find(item => item.id === Number(id));
                totalAmount += Math.floor(cartItems[category][id] * itemInfo.price);
            }
        }
    }
        return totalAmount;
    }

    const categories = products ? Object.keys(products) : []; // ['pizze', 'panini', 'sushi', ...]
    
    return(
        <div className="bg-sec txt-det max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12">
            {/* Bottoni di navigazione */}
            <div className="sticky top-0  z-10 bg-sec w-full py-5 flex gap-8 justify-center my-2 font-oddval text-xl">
                {categories.map(category => (
                    <button
                    key={category}
                    onClick={() => document.getElementById(category).scrollIntoView({ behavior: 'smooth' })}>{category.charAt(0).toUpperCase() + category.slice(1)}</button>
                ))}
            </div>

            {isCartVisible && (
                <div className={"z-10 fixed p-4 right-0 top-[80px] bg-primary w-72 h-screen overflow-y-scroll"}>
                    <p className="text-2xl font-bold">Il tuo ordine: {getTotalAmount()}€</p>
                    {product.map(product => {
                        if (cartItems.product[product.id] !== 0) {
                            return (
                                <div key={product.id} className="relative glass my-3 grid grid-cols-5 overflow-hidden">
                                    <img className="rounded-lg w-[100px] h-[100px] object-cover col-span-2" src={product.image} alt="img" />
                                    <div>
                                        <p className="text-xl font-bold pl-2">{cartItems.product[product.id]} X </p>
                                        <p className="flex items-center space-x-4">{product.name}</p>
                                        <p>{product.price}€</p>
                                    </div>
                                    <div className="absolute right-0 bottom-0 gap-2 font-bold">
                                        <button onClick={() => removeFromCart('product', product.id)} className="text-red-600 bg-red-300 p-2 rounded">Rimuovi</button>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            )}

            {/* Rendi dinamica la creazione delle sezioni per ogni categoria */}
            <div className="mb-10">
            {categories.map(category => (
                <CategorySection
                key={category}
                category={category}
                items={products[category]}
                addToCart={addToCart}
                />
            ))}
            </div>
        </div>
    );
}