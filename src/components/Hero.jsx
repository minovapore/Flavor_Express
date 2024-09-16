import '../style/Hero.css';
import '../style/Global.css';
import InfiniteScroll from './InfiniteScroll'
import burger from '../assets/img/burger.png';
import pizza from '../assets/img/pizza.png'
import Carousel from './Carousel';

export default function Hero(){
    return(
        <>
        <div className="bg-banner xl:h-[650px] md:h-[500px] h-[250px] text-white xl:flex md:flex xl:flex-row md:flex-row col col-span-2">
           <h2 className='flex items-center mx-auto xl:text-9xl md:text-8xl text-4xl text-center font-archivio txt-det'>FLAVOR EXPRESS</h2>
        </div>
        <div className='bg-det relative h-[650px]'>
            <InfiniteScroll/>
            <div className='relative w-full h-[600px]'>
                <div className='absolute inset-0 z-0 animation'>
                    <img src={burger} alt="" className='object-cover xl:my-0 md:my-20 xl:w-[250px] md:w-[250px] w-[150px]'/>
                    <img src={pizza} alt="" className='object-cover ml-auto xl:-my-32 md:-my-64 my-48 rotate-12 me-9 xl:w-[350px] md:w-[300px] w-[150px]'/>
                </div>
                <h2 className='absolute inset-0 flex justify-center xl:my-14 md:my-14 my-14 xl:text-6xl md:text-6xl text-5xl font-archivio z-10 txt-border txt-det'>CHI SIAMO</h2>
                <p className='absolute inset-0 flex justify-center items-center xl:mt-0 md:mt-24 mt-0 xl:text-4xl md:text-4xl text-2xl xl:w-9/12 md:w-9/12 text-center font-oddval mx-auto z-10'>Flavor Express è un servizio di food delivery che offre piatti freschi e gustosi, con consegne rapide a domicilio, combinando cucina locale e internazionale per ogni esigenza.  Che tu voglia una cena gourmet o un pasto veloce, Flavor Express garantisce un'esperienza culinaria comoda e gustosa, senza rinunciare alla comodità di mangiare a casa.</p>
            </div>
        </div>
        <div className='w-full h-[650px] bg-sec'>
        <h2 className='txt-border2 txt-sec flex justify-center text-center xl:text-6xl md:text-6xl font-archivio'>PRONTO A SODDISFARE LA TUA FAME?</h2>
        <p className='txt-det flex justify-center text-3xl font-archivio text-center my-5'>Flavor Express consiste in un menù interessante e vario</p>
            <Carousel/>
        <div className='flex justify-center'>
        <a href="/menù" className='text-xl font-oddval font-semibold txt-sec'><button className='btn w-32 rounded-full btn-order'>Ordina</button></a>
        </div>
        </div>
        </>
    );
}