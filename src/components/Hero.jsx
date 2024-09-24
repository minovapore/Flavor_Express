import '../style/Hero.css';
import '../style/Global.css';
import InfiniteScroll from './InfiniteScroll'
import burger from '../assets/img/burger.png';
import pizza from '../assets/img/pizza.png'
import Carousel from './Carousel';
import mockup from '../assets/img/mockup.png'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import rider from '../assets/img/rider.png';
import work from '../assets/img/work.png';
import chef from '../assets/img/chef.png';


export default function Hero(){
    return(
        <>
        <div className="bg-banner xl:h-[650px] md:h-[500px] h-[250px] text-white xl:flex md:flex xl:flex-row md:flex-row col col-span-2">
           <h2 className='flex items-center mx-auto xl:text-9xl md:text-8xl text-4xl text-center font-archivio txt-det'>FLAVOR EXPRESS</h2>
        </div>
        <div className='bg-det relative h-[650px]'>
            <InfiniteScroll/>
            <div className='relative w-full h-[600px]' id='chi-siamo'>
                <div className='absolute inset-0 z-0 animation'>
                    <img src={burger} alt="" className='object-cover xl:my-0 md:my-20 xl:w-[250px] md:w-[250px] w-[150px]'/>
                    <img src={pizza} alt="" className='object-cover ml-auto xl:-my-32 md:-my-64 my-48 rotate-12 me-9 xl:w-[350px] md:w-[300px] w-[150px]'/>
                </div>
                <h2 className='absolute inset-0 flex justify-center xl:my-14 md:my-14 my-14 xl:text-6xl md:text-6xl text-5xl font-archivio z-10 txt-border txt-det'>CHI SIAMO</h2>
                <p className='absolute inset-0 flex justify-center items-center xl:mt-0 md:mt-24 mt-0 xl:text-4xl md:text-4xl text-2xl xl:w-9/12 md:w-9/12 text-center font-oddval txt-sec mx-auto z-10'>Flavor Express è un servizio di food delivery che offre piatti freschi e gustosi, con consegne rapide a domicilio, combinando cucina locale e internazionale per ogni esigenza.  Che tu voglia una cena gourmet o un pasto veloce, Flavor Express garantisce un'esperienza culinaria comoda e gustosa, senza rinunciare alla comodità di mangiare a casa.</p>
            </div>
        </div>
        <div className='w-auto h-auto bg-sec' id='ordina'>
            <h2 className='txt-border2 txt-sec flex justify-center text-center xl:text-6xl md:text-6xl text-5xl font-archivio'>PRONTO A SODDISFARE LA TUA FAME?</h2>
            <p className='txt-det flex justify-center xl:text-4xl md:text-4xl text-2xl font-archivio text-center my-5'>Flavor Express consiste in un menù interessante e vario</p>
            <Carousel/>
            <div className='flex justify-center'>
                <a href="/menù"><button className='h-12 w-32 rounded-lg btn-order text-xl font-oddval font-semibold txt-det'>Ordina</button></a>
            </div>
            <div className='my-20 w-11/12 h-[500px] bg-det txt-sec mx-auto grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                <div className='flex justify-center items-center  xl:my-0 md:-my-0 my-10' id='app'>
                    <div>
                    <h2 className='font-archivio xl:text-6xl md:text-6xl text-5xl'>Scarica l'app</h2>
                        <div className='flex justify-evenly'>
                            <button className='flex items-center justify-center w-36 h-12 rounded-lg my-5 btn-app'><p className='text-3xl txt-sec'><FaApple /></p>
                            <p className='font-bold text-lg txt-sec mx-1'>App Store</p></button>
                            <button className='flex items-center justify-center w-36 h-12 rounded-lg my-5 btn-app'><p className='text-2xl txt-sec'><FaGooglePlay /></p>
                            <p className='font-bold text-lg txt-sec mx-1'>Google Play</p></button>
                            </div>
                        </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={mockup} alt="" />
                </div>
            </div>
            <div>
                <div className='flex justify-center'>
                    <h2 className='txt-border2 txt-sec flex justify-center text-center xl:text-6xl md:text-6xl text-5xl font-archivio mb-10'>LAVORA CON NOI</h2>
                </div>
                <div className='flex justify-center'>
                    <div className='grid xl:grid-cols-3 md:grid-cols-3 gap-10'>
                        <div>
                            <img src={rider} alt="" className='w-[300px] rounded-xl'/>
                            <h3 className='flex justify-center text-2xl txt-det font-oddval my-3'>Diventa un rider</h3>
                        </div>
                        <div>
                            <img src={chef} alt="" className='w-[300px]  rounded-xl'/>
                            <h3 className='flex justify-center text-2xl txt-det font-oddval my-3'>Diventa partner</h3>
                        </div>
                        <div>
                            <img src={work} alt="" className='w-[300px]  rounded-xl'/>
                            <h3 className='flex justify-center text-2xl txt-det font-oddval my-3'>Lavora con noi</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <   button className='my-10 bg-acc w-32 h-12 rounded-lg text-xl font-oddval font-semibold txt-det'>Inizia ora</button>
                </div>
            </div>
        </div>
        </>
    );
}