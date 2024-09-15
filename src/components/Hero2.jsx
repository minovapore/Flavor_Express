import '../style/Hero.css';
import '../style/Global.css';
import heroImg from '../assets/img/hero-img.jpg';
import InfiniteScroll from './InfiniteScroll'
import burger from '../assets/img/burger.png';
import sushi from '../assets/img/sushi.png'
import pizza from '../assets/img/pizza.png'

export default function Hero(){
    return(
        <>
        <div className="bg-banner xl:h-[650px] md:h-[500px] h-[250px] text-white xl:flex md:flex xl:flex-row md:flex-row col col-span-2">
           <h2 className='flex items-center mx-auto text-9xl font-archivio txt-det'>FLAVOR EXPRESS</h2>
        </div>
        <div className='bg-det relative h-[800px]'>
            <InfiniteScroll/>
            <div className='relative w-full h-[600px]'>
                <div className='absolute inset-0 z-0 burger-an'>
                    <img src={burger} alt="" className='object-cover'/>
                    <img src={sushi} alt="" className='object-cover ml-auto -my-96 rotate-12 me-12'/>
                </div>
                <p className='absolute inset-0 flex justify-center items-center text-4xl w-9/12 text-center font-oddval mx-auto z-10'>Flavor Express è un servizio di food delivery che offre piatti freschi e gustosi, con consegne rapide a domicilio, combinando cucina locale e internazionale per ogni esigenza.  Che tu voglia una cena gourmet o un pasto veloce, Flavor Express garantisce un'esperienza culinaria comoda e gustosa, senza rinunciare alla comodità di mangiare a casa.</p>
            </div>
        </div>
        </>
    );
}