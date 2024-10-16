import { useState, useEffect } from 'react';
import '../style/Checkout.css'
import { products } from '../product';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2'

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

    //Stati per gestire i valori dei campi del form
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');

    const [errorAlert, setErrorAlert] = useState(false);
    const navigate = useNavigate();

    //Funzione per gestire l'invio del form
    const handleSubmit = (e) => { e.preventDefault(); //previene il comportamento predefinito del form

    //Verifica se tutti i campi sono compilati
    if(!name || !city || !address || !number){
        setErrorAlert(true);
        setTimeout(()=>{
            setErrorAlert(false);
        }, 10000);
        return;
    }
    
    //Se tutti i campi sono compilati, reset dei campi form
    setName('');
    setCity('');
    setAddress('');
    setNumber('');

    navigate('/pagamento');
    }
    return(
        <>
        <Navbar2/>
        <div className='bg-sec w-full h-screen'>
        <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>
                <h2 className='xl:text-5xl md:text-5xl text-5xl text-center font-oddval txt-det txt-border my-5 '>Completa il tuo ordine</h2>
            </div>
            <div className='border-form xl:w-[1200px] md:w-full xl:h-[500px] md:h-[500px] h-[500px] mx-auto rounded-xl overflow-y-scroll'>
                <div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                    <div className='mx-auto my-5'>
                        <h2 className='txt-acc font-oddval text-2xl'>Riepilogo ordine</h2>
                        <div>
                            {Object.keys(cartItems).map(category => (
                                products[category].map(product => {
                                    if (cartItems[category][product.id] > 0) {
                                    return (
                                        <div key={product.id} className="order-item w-[100px] h-[100px] flex items-center">
                                            <img src={product.image} alt={product.name} className="order-item-image object-contain" />
                                            <div className="txt-sec font-archivio">
                                                <p className='line-clamp-2 w-[100px]'>{cartItems[category][product.id]} X {product.name}</p>
                                                <p>{(product.price * cartItems[category][product.id]).toFixed(2)}€</p>
                                            </div>
                                        </div>
                                        );
                                    }
                                    return null;
                                })
                            ))}
                            <div className="total-bord flex justify-center items-center gap-2">
                                <p className='txt-acc font-oddval text-2xl my-3'>Totale:</p>
                                <p className='txt-sec font-archivio text-lg my-3'>{getTotalAmount()}€</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-5 px-5'>
                        <div className='flex justify-center'>
                            <h2 className='txt-acc font-oddval text-2xl'>Inserisci i dati</h2>
                        </div>
                        
                            <div>
                                <h3 className='txt-acc font-oddval text-xl'>Nome</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} className="grow font-archivio" placeholder="Nome" required/>
                                </label>
                            </div>
                            <div className='my-5'>
                                <h3 className='txt-acc font-oddval text-xl'>Città</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name='city' value={city} onChange={(e)=>setCity(e.target.value)} className="grow font-archivio" placeholder="Città" required/>
                                </label>
                            </div>
                            <div>
                                <h3 className='txt-acc font-oddval text-xl'>Indirizzo</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text"  name='address' value={address} onChange={(e)=>setAddress(e.target.value)} className="grow font-archivio" placeholder="Indirizzo" required/>
                                </label>
                            </div>
                            <div className='my-5'>
                                <h3 className='txt-acc font-oddval text-xl'>Cellulare</h3>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="number"  name='number' value={number} onChange={(e)=>setNumber(e.target.value)} className="grow font-archivio" placeholder="Cellulare" required/>
                                </label>
                            </div>
                            {errorAlert && (
                                <div role="alert" className="flex alert alert-error xl:mb-8 md:mb-8 h-14">
                                     <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current text-white"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-white text-lg font-semibold">Completa tutti i campi</span>
                                </div>
                            )}
                    </div>
                </div>
            </div>
            <div className='my-10 flex justify-center'> 
                <a href="/pagamento"><button type='submit' className="bg-acc w-40 h-10 rounded-lg font-archivio txt-sec">Conferma ordine</button></a>
            </div>
        </form>
        </div>
        <Footer/>
        </>
    );
}