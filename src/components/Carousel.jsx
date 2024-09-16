import '../style/Carousel.css';
import panino from '../assets/img/panino.png';
import pizza2 from '../assets/img/pizza2.png';
import sushi from '../assets/img/sushi.png';
import insalata from '../assets/img/insalata.png';
import fritti from '../assets/img/fritti.png';
import dolci from '../assets/img/dolce.png';
import bevande from '../assets/img/bevande.png';

export default function Carousel(){
    return (
        <div className="flex justify-center my-16">
            <div className="carousel w-[1100px] h-[300px]">
                <div id="slide1" className="carousel-item  relative bg-sec w-full flex justify-center items-center">
                    <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl'>
                        <img src={panino} className='w-[300px] h-[200px]'/>
                        <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>PANINI</p>
                    </div>
                    <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl mx-3'>
                        <img src={pizza2} className='w-[300px] h-[200px]'/>
                        <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>PIZZE</p>
                    </div>
                    <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl'>
                        <img src={sushi} className='w-[300px] h-[200px]'/>
                        <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>SUSHI</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-custom">❮</a>
                        <a href="#slide2" className="btn btn-custom">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item  relative bg-sec w-full  flex justify-center items-center">
                  <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={sushi} className='w-[300px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>SUSHI</p>
                  </div>
                  <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl mx-3'>
                    <img src={fritti} className='w-[300px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>FRITTI</p>
                  </div>
                  <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={insalata} className='w-[300px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[220px]'>INSALATE</p>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-custom">❮</a>
                    <a href="#slide3" className="btn btn-custom">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item  relative bg-sec w-full  flex justify-center items-center">
                  <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={insalata} className='w-[300px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[220px]'>INSALATE</p>
                  </div>
                  <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl mx-3'>
                    <img src={dolci} className='w-[300px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>DOLCI</p>
                  </div>
                  <div className='w-[300px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={bevande} className='w-[300px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[220px]'>BEVANDE</p>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-custom">❮</a>
                    <a href="#slide1" className="btn btn-custom">❯</a>
                  </div>
                </div>
            </div>
        </div>
    );
}