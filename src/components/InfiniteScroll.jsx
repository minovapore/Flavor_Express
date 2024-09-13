import cocaCola from '../assets/img/bevanda.png';
import panino from '../assets/img/panino.png';
import cheescake from '../assets/img/cheescake.png';
import pizza from '../assets/img/pizza.png';
import insalata from '../assets/img/insalata.png';
import sushi from '../assets/img/sushi.png';
import fritti from '../assets/img/fritti.png';


export default function InfiniteScroll(){
    return(
        <>
        <div className="scroll-container mt-20">
            <div className="scroll-content">
                <div className="scroll-track">
                    <div className="scroll-item"><img src={panino} alt="Panino" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>PANINI</div>
                    <div className="scroll-item"><img src={pizza} alt="Pizza" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>PIZZE</div>
                    <div className="scroll-item"><img src={sushi} alt="Pizza" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>SUSHI</div>
                    <div className="scroll-item"><img src={fritti} alt="Pizza" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>FRITTI</div>
                    <div className="scroll-item"><img src={cheescake} alt="Cheesecake" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>DOLCI</div>
                    <div className="scroll-item"><img src={insalata} alt="Insalata" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>INSALATE</div>
                    <div className="scroll-item"><img src={cocaCola} alt="Coca Cola" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>BEVANDE</div>
          
                    {/* Duplicato per il ciclo continuo */}
                    <div className="scroll-item"><img src={panino} alt="Panino" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>PANINI</div>
                    <div className="scroll-item"><img src={pizza} alt="Pizza" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>PIZZE</div>
                    <div className="scroll-item"><img src={sushi} alt="Pizza" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>SUSHI</div>
                    <div className="scroll-item"><img src={fritti} alt="Pizza" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>FRITTI</div>
                    <div className="scroll-item"><img src={cheescake} alt="Cheesecake" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>DOLCI</div>
                    <div className="scroll-item"><img src={insalata} alt="Insalata" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>INSALATE</div>
                    <div className="scroll-item"><img src={cocaCola} alt="Coca Cola" /></div>
                    <div className='border-custom txt-sec w-[400px] rounded-3xl flex justify-center items-center text-4xl font-bold'>BEVANDE</div>
                </div>
            </div>
        </div>
        </>
    );
}