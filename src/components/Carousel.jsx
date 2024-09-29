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
      <>        
      <div className="xl:flex md:flex justify-center my-16 hidden">
            <div className="carousel xl:w-[1100px] md:w-[950px] h-[300px]">
                <div id="slide1" className="carousel-item  relative bg-sec w-full flex justify-center items-center">
                    <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl'>
                        <img src={panino} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                        <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>PANINI</p>
                    </div>
                    <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl mx-3'>
                        <img src={pizza2} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                        <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>PIZZE</p>
                    </div>
                    <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl'>
                        <img src={sushi} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                        <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>SUSHI</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-custom">❮</a>
                        <a href="#slide2" className="btn btn-custom">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item  relative bg-sec w-full  flex justify-center items-center">
                  <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={sushi} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>SUSHI</p>
                  </div>
                  <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl mx-3'>
                    <img src={fritti} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>FRITTI</p>
                  </div>
                  <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={insalata} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[220px]'>INSALATE</p>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-custom">❮</a>
                    <a href="#slide3" className="btn btn-custom">❯</a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item  relative bg-sec w-full  flex justify-center items-center">
                  <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={insalata} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[220px]'>INSALATE</p>
                  </div>
                  <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl mx-3'>
                    <img src={dolci} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[150px]'>DOLCI</p>
                  </div>
                  <div className='xl:w-[300px] md:w-[250px] h-[220px] bord-card-carousel rounded-2xl'>
                    <img src={bevande} className='xl:w-[300px] md:w-[250px] h-[200px]'/>
                    <p className='flex justify-center mx-auto font-oddval txt-det text-4xl bg-sec w-[220px]'>BEVANDE</p>
                  </div>
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-custom">❮</a>
                    <a href="#slide1" className="btn btn-custom">❯</a>
                  </div>
                </div>
            </div>
        </div>

        {/* CAROUSEL MOBILE */}
        <div className="data-bs-carousel carousel rounded-none xl:hidden md:hidden w-full gap-3  my-16">
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={panino}
              alt="Burger" />
          </div>
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={pizza2}
              alt="Burger" />
          </div>
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={sushi}
              alt="Burger" />
          </div>
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={fritti}
              alt="Burger" />
          </div>
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={insalata}
              alt="Burger" />
          </div>
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={dolci}
              alt="Burger" />
          </div>
          <div className="carousel-item bord-card-carousel w-[250px] h-[200px] rounded-2xl">
            <img
              src={bevande}
              alt="Burger" />
          </div>
        </div>
      </>
    );
}