import cocaCola from '../assets/img/bevanda.png';
import panino from '../assets/img/panino.png';
import cheescake from '../assets/img/cheescake.png';
import pizza from '../assets/img/pizza.png';
import insalata from '../assets/img/insalata.png';


export default function InfiniteScroll(){
    return(
        <>
        <div className="scroll-container mt-20">
            <div className="scroll-content">
                <div className="scroll-track">
                    <div className="scroll-item"><img src={panino} alt="Panino" /></div>
                    <div className='b g-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>PANINI</div>
                    <div className="scroll-item"><img src={cheescake} alt="Cheesecake" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>DOLCI</div>
                    <div className="scroll-item"><img src={pizza} alt="Pizza" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>PIZZE</div>
                    <div className="scroll-item"><img src={insalata} alt="Insalata" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>INSALATE</div>
                    <div className="scroll-item"><img src={cocaCola} alt="Coca Cola" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>BEVANDE</div>
          
                    {/* Duplicato per il ciclo continuo */}
                    <div className="scroll-item"><img src={panino} alt="Panino" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>PANINI</div>
                    <div className="scroll-item"><img src={cheescake} alt="Cheesecake" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>DOLCI</div>
                    <div className="scroll-item"><img src={pizza} alt="Pizza" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>PIZZE</div>
                    <div className="scroll-item"><img src={insalata} alt="Insalata" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>INSALATE</div>
                    <div className="scroll-item"><img src={cocaCola} alt="Coca Cola" /></div>
                    <div className='bg-det w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold text-white'>BEVANDE</div>
                </div>
            </div>
        </div>
        </>
    );
}