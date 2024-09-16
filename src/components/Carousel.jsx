import '../style/Carousel.css';
import dolci from '../assets/img/cheescake.png';

export default function Carousel(){
    return (
        <div className="flex justify-center my-28">
            <div className="carousel w-[1000px] h-[300px]">
                <div id="slide1" className="carousel-item  relative bg-sec w-full flex justify-center items-center">
                    <div>
                        <img src={dolci} className='w-[300px] h-[200px]'/>
                        <p className='flex justify-center'>PANINI</p>
                    </div>
                     <div>
                        <img src={dolci} className='w-[300px] h-[200px]'/>
                        <p className='flex justify-center'>PIZZE</p>
                    </div>
                    <div>
                        <img src={dolci} className='w-[300px] h-[200px]'/>
                        <p className='flex justify-center'>SUSHI</p>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-custom">❮</a>
                        <a href="#slide2" className="btn btn-custom">❯</a>
                    </div>
                </div>
  <div id="slide2" className="carousel-item  relative bg-sec w-full  flex justify-center items-center">
  <div>
    <img src={dolci} className='w-[300px] h-[200px]'/>
    <p className='flex justify-center'>SUSHI</p>
    </div>
    <div>
    <img src={dolci} className='w-[300px] h-[200px]'/>
    <p className='flex justify-center'>FRITTI</p>
    </div>
    <div>
    <img src={dolci} className='w-[300px] h-[200px]'/>
    <p className='flex justify-center'>INSALATE</p>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-custom">❮</a>
      <a href="#slide3" className="btn btn-custom">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item  relative bg-sec w-full  flex justify-center items-center">
  <div>
    <img src={dolci} className='w-[300px] h-[200px]'/>
    <p className='flex justify-center'>INSALATE</p>
    </div>
    <div>
    <img src={dolci} className='w-[300px] h-[200px]'/>
    <p className='flex justify-center'>DOLCI</p>
    </div>
    <div>
    <img src={dolci} className='w-[300px] h-[200px]'/>
    <p className='flex justify-center'>BEVANDE</p>
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