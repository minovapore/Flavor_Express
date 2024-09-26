import { useState } from 'react';
import '../style/Payment.css';

export default function Payment(){
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    const [email, setEmail] = useState('');

    const [successAlert, setSuccessAlert] = useState(false);

    const handleSubmit = (e) => { e.preventDefault();

        setName('');
        setSurname('');
        setCardNumber('');
        setExpiration('');    
        setCvv('');
        setEmail('');

        setSuccessAlert(true);
        setTimeout(() => {
            setSuccessAlert(false)
        }, 10000);
    }

    return(
        <div className='bg-det w-full h-screen'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center'>
                    <h2 className='xl:text-4xl md:text-4xl text-3xl font-archivio txt-sec my-5'>Conferma ordine</h2>
                </div>
                <div className='bord-form xl:w-[600px] xl:h-[500px] md:h-[500px] h-[500px] mx-auto rounded-xl px-5'>
                    <div className='flex justify-between my-3'>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>Nome</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name='name' value={name} onChange={(e)=> setName(e.target.value)} className="grow font-oddval" placeholder="Nome" />
                            </label>
                        </div>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>Cognome</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name='surname' value={surname} onChange={(e)=> setSurname(e.target.value)} className="grow font-oddval" placeholder="Cognome" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className='txt-sec font-oddval text-xl'>Numero carta</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='card_number' value={cardNumber} onChange={(e)=> setCardNumber(e.target.value)} className="grow font-oddval" placeholder="Numero carta" />
                        </label>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>Scadenza</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="expiration" name='name' value={expiration} onChange={(e)=> setExpiration(e.target.value)} className="grow font-oddval" placeholder="mm/aa" />
                            </label>
                        </div>
                        <div>
                            <h3 className='txt-sec font-oddval text-xl'>CVV</h3>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="number" name='cvv' value={cvv} onChange={(e)=> setCvv(e.target.value)} className="grow font-oddval" placeholder="CVV" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h3 className='txt-sec font-oddval text-xl'>Email</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="email" name='email' value={email} onChange={(e)=> setEmail(e.target.value)} className="grow font-oddval" placeholder="Email" />
                        </label>
                    </div>
                    <div className='flex justify-center my-10'>
                        <button type='submit' className='bg-sec w-40 h-10 rounded-lg font-oddval txt-det'>Invia ordine</button>
                    </div>
                </div>
                <div className='flex justify-center my-5'>
                {successAlert && (
                        <div role="alert" className="alert alert-success w-[600px]">
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
                    </div>
            </form>
        </div>
    );
}