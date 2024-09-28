import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../style/LavoraConNoi.css'
import { useState } from 'react';

export default function LavoraConNoi(){

    const [checkboxes, setCheckboxes] = useState({
        rider: false,
        partner: false,
        teamMember: false
    })

    //Funzione per gestire il cambiamento dello stato dei checkbox
    const handleCheckboxChange = (e) => {
        const{name, checked} = e.target;
        setCheckboxes((prevCheckboxes) => ({
            ...prevCheckboxes, [name]:checked //Aggiorna solo il checkbox selezionato
        }));
    };

    //Funzione per resettare i checkbox dopo l'invio del form
    const resetCheckboxes = () => {
        setCheckboxes({
            rider: false,
            partner: false,
            teamMember: false
        });
    };

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');

    const[successAlert, setSuccessAlert] = useState('')

    const handleSubmit = (e) => { e.preventDefault();
        
        if (number.length < 10) {
        alert("Il numero di cellulare deve contenere almeno 10 cifre.");
        return; // Ferma l'invio del form
    }

        setName('');
        setSurname('');
        setEmail('');
        setNumber('');    
        setCompany('');

        setSuccessAlert(true);

        setTimeout(() => {
            setSuccessAlert(false)
        }, 10000);
    }

    return(
        <>
        <Navbar/>
        <div className="bg-sec w-full xl:h-[800px] h-screen">
            <form onSubmit={handleSubmit}>
            <div className='flex justify-center'>
                <h2 className='xl:text-4xl md:text-4xl text-3xl font-archivio txt-det my-5 text-center'>Lavora con noi o <br /> diventa partner</h2>
            </div>
            <div className='bord-form xl:w-[600px] md:w-[600px] xl:h-[575px] md:h-[575px] h-[650px] mx-auto rounded-xl px-5'>
                <div className='flex justify-center my-3'>
                    <h2 className='font-oddval text-xl txt-sec mx-2'>Scegli cosa vuoi diventare</h2>
                </div>
                <div className='flex justify-center my-3 gap-10'>
                    <div className='flex'>
                        <input
                        type="checkbox"
                        name="rider"
                        checked={checkboxes.rider}
                        onChange={handleCheckboxChange}
                        className="checkbox border-check theme-check check-color" />
                        <h2 className='font-oddval text-lg txt-sec mx-2'>Rider</h2>
                    </div>
                    <div className='flex'>
                        <input
                        type="checkbox"
                        name="partner"
                        checked={checkboxes.partner}
                        onChange={handleCheckboxChange}
                        className="checkbox border-check theme-check check-color" />
                        <h2 className='font-oddval text-lg txt-sec mx-2'>Partner</h2>
                    </div>
                    <div className='flex'>
                        <input
                        type="checkbox"
                        name="teamMember"
                        checked={checkboxes.teamMember}
                        onChange={handleCheckboxChange}
                        className="checkbox border-check theme-check check-color" />
                        <h2 className='font-oddval text-lg txt-sec mx-2'>Membro del <br /> team</h2>
                    </div>
                </div>
                <div className='xl:flex xl:justify-between md:flex md:justify-between'>
                    <div className='my-3'>
                        <h3 className='txt-sec font-oddval text-xl'>Nome</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} className="grow font-oddval" placeholder="Nome" required />
                        </label>
                    </div>
                    <div className='my-3'>
                        <h3 className='txt-sec font-oddval text-xl'>Cognome</h3>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='surname' value={surname} onChange={(e)=>setSurname(e.target.value)} className="grow font-oddval" placeholder="Cognome" required/>
                        </label>
                    </div>
                </div>
                <div className='my-3'>
                    <h3 className='txt-sec font-oddval text-xl'>Email</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="grow font-oddval" placeholder="Email" required/>
                    </label>
                </div>
                <div className='my-3'>
                    <h3 className='txt-sec font-oddval text-xl'>Cellulare</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="number" name='number' value={number} onChange={(e)=>setNumber(e.target.value)} className="grow font-oddval" placeholder="Cellulare" required minLength={10}/>
                    </label>
                </div>
                <div className='my-3'>
                    <h3 className='txt-sec font-oddval text-xl'>Nome azienda</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name='company' value={company} onChange={(e)=>setCompany(e.target.value)} className="grow font-oddval" placeholder="Nome azienda" />
                    </label>
                </div>
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
            </div>
            <div className='flex justify-center my-5'>
                <button className='w-32 h-10 bg-acc rounded-lg font-oddval txt-det mb-5' onClick={resetCheckboxes}>Invia</button>
            </div>
            </form>
        </div>
        <Footer/>
        </>
    );
}