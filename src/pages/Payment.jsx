import { useState } from 'react';
import '../style/Payment.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Payment(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [email, setEmail] = useState('');

    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);

    const handleSubmit = (e) => { e.preventDefault();

        // if (number.length < 27) {
        //     alert("Il numero di cellulare deve contenere almeno 27 cifre.");
        //     return; // Ferma l'invio del form
        // }

        if(!name || !surname || !cardNumber || !expiration || !cvv || !email){
            setErrorAlert(true);
            setSuccessAlert(false);

            setTimeout(() => {
                setErrorAlert(false)
            }, 10000);
            return
        }

        setName('');
        setSurname('');
        setCardNumber('');
        setExpiration('');    
        setCvv('');
        setEmail('');

        setSuccessAlert(true);
        setErrorAlert(false);

        setTimeout(() => {
            setSuccessAlert(false)
        }, 10000);
    }

    return(
        <>
        <Navbar/> 
        <div className='bg-sec w-full h-screen'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center'>
                    <h2 className='xl:text-4xl md:text-4xl text-3xl font-archivio txt-det my-5'>Conferma ordine</h2>
                </div>
                <div className='bord-form xl:w-[600px] md:w-[600px] xl:h-[500px] md:h-[500px] h-[700px] mx-auto rounded-xl px-5'>
                    <div className='xl:flex xl:justify-between md:flex md:justify-between my-3'>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>Nome</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name='name' value={name} onChange={(e)=> setName(e.target.value)} className="grow font-oddval" placeholder="Nome" required/>
                            </label>
                        </div>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>Cognome</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name='surname' value={surname} onChange={(e)=> setSurname(e.target.value)} className="grow font-oddval" placeholder="Cognome" required/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className='txt-sec font-oddval text-xl'>Numero carta</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='card_number' value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} className="grow font-oddval" placeholder="Numero carta" required minLength={27}/>
                        </label>
                    </div>
                    <div className='xl:flex xl:justify-between md:flex md:justify-between my-3'>
                        <div className='my-3'>
                            <h3 className='txt-sec font-oddval text-xl'>Scadenza</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name='expiration' value={expiration} onChange={(e)=> setExpiration(e.target.value)} className="grow font-oddval" placeholder="mm/aa" required/>
                            </label>
                        </div>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>CVV</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="number" name='cvv' value={cvv} onChange={(e)=> setCvv(e.target.value)} className="grow font-oddval" placeholder="CVV" required minLength={3}/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className='txt-sec font-oddval text-xl'>Email</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} className="grow font-oddval" placeholder="Email" required/>
                        </label>
                    </div>
                    <div className='flex justify-center my-5'>
                        <button type='submit' className='bg-sec w-40 h-10 rounded-lg font-oddval txt-det'>Invia ordine</button>
                    </div>
                    <div className='flex justify-center'>
                {successAlert && (
                        <div role="alert" className="flex alert alert-success xl:mb-8 md:mb-8 h-14">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 shrink-0 stroke-current text-white"
                            fill="none"
                            viewBox="0 0 24 24">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-white text-lg font-semibold">Ordine avvenuto con successo</span>
                        </div>
                    )}
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
                                <span className='text-white text-lg font-semibold'>Compila tutti i campi</span>
                              </div>
                            )}
                    </div>
                </div>
            </form>
            <div className='flex justify-center my-5'>
                <a href="/"><button className='bg-acc w-40 h-10 rounded-lg font-oddval txt-det'>Torna alla home</button></a>
            </div>
        </div> 
        <Footer/>
        </>
    );
}