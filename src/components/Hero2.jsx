import React, { useEffect, useRef} from 'react';
import '../style/Hero.css';
import Carousel from './Carousel';
import Stepper from './Stepper';
import InfiniteScroll from './InfiniteScroll';
import mockup from '../assets/img/mockup.png'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import rider from '../assets/img/rider.png';
import work from '../assets/img/work.png';
import chef from '../assets/img/chef.png';
import burger from'../assets/img/burger.png';
import pizza from '../assets/img/pizza2.png';
import sushi from '../assets/img/nigiri.png';
import { gsap } from 'gsap';

export default function Hero2(){
    // Creiamo i riferimenti per il titolo e l'immagine
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Animiamo il titolo e l'immagine all'apertura del sito
        gsap.fromTo(
            titleRef.current, 
            { scale: 0 }, 
            { scale: 1, duration: 1.5, ease: 'power3.out' }
        );

        gsap.fromTo(
            imageRef.current, 
            { scale: 0 }, 
            { scale: 1, duration: 1.5, ease: 'power3.out',}
        );
    }, []);
    return (
        <div className='bg-sec w-full h-auto'>
            <h2 ref={titleRef} className='flex justify-center font-oddval xl:text-8xl md:text-8xl text-7xl txt-det text-center'>FLAVOR EXPRESS</h2>
            <div ref={imageRef} className='bg-banner xl:w-11/12 xl:h-[650px] md:w-11/12 md:h-[600px] w-11/12 h-[600px] mx-auto rounded-full my-10'>
                <div  className='flex justify-center items-center h-full'>
                        <p className='xl:text-5xl md:text-4xl text-3xl font-oddval txt-acc text-center max-w-4xl txt-border2'>Flavor Express è un servizio di food delivery che offre cibo di qualità con consegne rapide e una vasta scelta di piatti, per un'esperienza comoda e gustosa.
                        </p>
                </div>
            </div>
            <div className='bg-det'>
                <InfiniteScroll/>
                <h2 className='flex justify-center my-8 xl:text-6xl md:text-5xl text-4xl text-center font-oddval txt-border txt-sec about-us-animation'>CONSEGAMO TUTTO CIO' CHE VUOI <br /> DOVE VUOI</h2>
                <div className='flex justify-center'>
                    <div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 mb-5'>
                        <div className='stepper-animation'>
                            <Stepper/>
                        </div>
                        <div className='carousel-animation'>
                            <Carousel/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full bg-sec relative'>
                <div className='relative w-full md:h-[550px] h-[550px] about-us-animation'>
                    <div className='absolute inset-0 z-0 animation'>
                        <img src={sushi} alt="" className='object-cover xl:w-[250px] md:w-[200px] w-[150px] mx-auto absolute top-[-44px] xl:right-64 md:right-64 right-20 rotate-12'/>
                        <img src={burger} alt="" className='object-cover xl:my-0 md:my-0 my-32 xl:w-[250px] md:w-[250px] w-[175px]'/>
                        <img src={pizza} alt="" className='object-cover ml-auto xl:-my-36 md:-my-32 -my-44 me-7 rotate-12 xl:w-[200px] md:w-[175px] w-[125px]'/>
                    </div>
                    <div className='flex justify-center items-center h-full'>
                        <div className='absolute'>
                            <h2 className='font-oddval xl:text-6xl md:text-5xl text-4xl txt-det text-center txt-border'>PRONTO A SODDISFARE <br /> LA TUA FAME?</h2>
                            <p className='font-archivio text-xl txt-det max-w-4xl text-center mx-auto my-7'>Esplora una varietà di piatti deliziosi, pensati per ogni gusto e occasione. Sapori unici e ingredienti freschi per un'esperienza culinaria che ti conquisterà!</p>
                            <div className='flex justify-center'>
                                <a href="/menù"><button className='my-3 w-36 h-12 bg-acc rounded-xl font-archivio text-xl txt-sec'>Ordina</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto bg-sec'>
                    <div className='my-10 w-11/12 h-[500px] bg-det txt-sec mx-auto grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1'>
                        <div className='flex justify-center items-center' id='app'>
                            <div>
                                <h2 className='font-oddval xl:text-6xl md:text-6xl text-5xl txt-sec'>Scarica l'app</h2>
                                <div className='flex justify-evenly'>
                                    <button className='flex items-center justify-center w-36 h-12 rounded-lg my-5 btn-app'><p className='text-3xl txt-acc'><FaApple /></p>
                                    <p className='font-bold text-lg txt-acc mx-1'>App Store</p></button>
                                    <button className='flex items-center justify-center w-36 h-12 rounded-lg my-5 btn-app'><p className='text-2xl txt-acc'><FaGooglePlay /></p>
                                    <p className='font-bold text-lg txt-acc mx-1'>Google Play</p></button>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center iphone-mockup-animation'>
                            <img src={mockup} alt="" className='xl:w-[400px] md:w-[400px] w-[300px]'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <h2 className='txt-border txt-det flex justify-center text-center xl:text-6xl md:text-6xl text-5xl font-oddval mb-10'>LAVORA CON NOI</h2>
                    </div>
                        <div className='flex justify-center'>
                            <div className='grid xl:grid-cols-3 md:grid-cols-3 gap-10'>
                                <div className='card-animation'>
                                <img src={rider} alt="" className='w-[300px] rounded-xl border-card'/>
                                <h3 className='flex justify-center text-2xl txt-acc font-archivio my-3'>Diventa un rider</h3>
                            </div>
                            <div>
                                <img src={chef} alt="" className='w-[300px] rounded-xl border-card'/>
                                <h3 className='flex justify-center text-2xl txt-acc font-archivio my-3'>Diventa partner</h3>
                            </div>
                            <div className='card-animation2'>
                                <img src={work} alt="" className='w-[300px] rounded-xl border-card'/>
                                <h3 className='flex justify-center text-2xl txt-acc font-archivio my-3'>Lavora con noi</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <a href="/lavora-con-noi"><button className='my-10 bg-acc w-32 h-12 rounded-lg text-xl font-archivio font-semibold txt-sec'>Inizia ora</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}