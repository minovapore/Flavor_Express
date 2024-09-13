import '../style/Hero.css';
import '../style/Global.css';
import bannerImg from '../assets/img/banner-img.png';
import InfiniteScroll from './InfiniteScroll';

export default function Hero(){
    return(
        <>
        <div className=" w-11/12 mx-auto xl:h-[500px] md:h-[500px] h-[250px] my-5 text-white xl:flex md:flex xl:flex-row md:flex-row col col-span-2">
            <div className="bg-sec xl:w-5/12 md:w-5/12 xl:h-auto md:h-auto h-auto xl:rounded-s-3xl md:rounded-s-3xl xl:block md:block hidden">
                <h2 className='text-center font-bold xl:text-3xl md:text-3xl text-xl xl:mt-16 md:mt-16 mt-3'>Cerca il tuo piatto</h2>
                <div className="text-black flex justify-center gap-2 my-5">
                    <label className="input input-bordered flex items-center justify-center gap-2 xl:w-[400px] md:w-[250px] w-[135px] xl:h-[50px] md:h-[50px] h-[30px]">
                        <input type="text" className="grow xl:text-lg md:text-lg xl:ms-0 md:ms-0 ms-20" placeholder="Cerca..." />
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                            </svg>
                    </label>
                    <button className="rounded-lg bg-det border-none text-white text-lg w-20">Cerca</button>
                </div>
                <div className='flex justify-center'>
                    <img src={bannerImg} alt="header" className='w-72'/>
                </div>
            </div>
            <div className="bg-banner w-8/12 xl:h-auto md:h-auto h-auto rounded-e-3xl">
                <div className='flex justify-center xl:mt-16 md:mt-16 mt-3'>
                    <h2 className='font-bold xl:text-6xl md:text-6xl text-3xl text-center'>FLAVOR <br /> EXPRESS</h2>
                </div>
                <p className='text-center xl:p-5 md:p-5 my-4 px-1 font-semibold xl:text-2xl md:text-2xl text-sm'>Flavor Express è un servizio di food delivery che offre piatti freschi e gustosi, con consegne rapide a domicilio, combinando cucina locale e internazionale per ogni esigenza.</p>
                <div className='xl:flex md:flex justify-center gap-20 my-5 hidden'>
                    <button className='rounded-xl bg-sec bord2 text-white w-32 h-12 text-lg'>Registrati</button>
                    <button className='rounded-xl bg-acc bord txt-sec w-32 h-12 text-lg'>Accedi</button>
                </div>
            </div>
            {/* mobile-version */}
            <div className="bg-sec xl:w-5/12 md:w-5/12 xl:h-auto md:h-auto h-[150px] xl:rounded-s-3xl md:rounded-s-3xl xl:hidden md:hidden rounded-3xl flex justify-center">
            <div>
            <h2 className='text-center font-bold xl:text-3xl md:text-3xl text-2xl xl:mt-16 md:mt-16 mt-3'>Cerca il tuo piatto</h2>
                <div className="text-black flex justify-center gap-2 my-5 ms-3">
                    <label className="input input-bordered flex items-center justify-center gap-2 xl:w-[400px] md:w-[250px] w-[175px] xl:h-[50px] md:h-[50px] h-[30px]">
                        <input type="text" className="grow xl:text-lg md:text-lg xl:ms-0 md:ms-0 ms-5" placeholder="Cerca..." />
                    </label>
                    <button className="rounded-lg bg-det border-none text-white text-lg w-8 flex justify-center items-center  text-center"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70">
                            <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                            </svg></button>
                </div>
            </div>
                <div className='flex justify-center items-center mx-3'>
                    <img src={bannerImg} alt="header" className='w-32 h-32'/>
                </div>
            </div>
        </div>
        <InfiniteScroll/>
        </>
    );
}