import {useState, useEffect } from 'react';
import '../style/Carousel.css';
import position from '../assets/img/position.png';
import product from '../assets/img/product.png';
import riderImg from '../assets/img/rider-img.png';

export default function Carousel(){
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlide = 3;

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentSlide((prevSlide)=>
      prevSlide === totalSlide ? 1 : prevSlide +1);
    }, 5000);
    return () => clearInterval(interval)
  }, [totalSlide]);
    return (
      <>   
      <div className="carousel w-full h-[400px]">
        <div
          id="slide1"
          className={`carousel-item relative w-full ${currentSlide === 1 ? "block" : "hidden"}`}
        >
          <img
            src={position}
            className="mx-auto w-[400px] h-[400px]"
            alt="Slide 1"
          />
          <div className="gap-3 -my-8 flex -translate-y-1/2 transform justify-center">
            <a href="#slide1" className={`btn-custom ${currentSlide === 1 ? "active" : ""}`} onClick={() => setCurrentSlide(1)}></a>
            <a href="#slide2" className={`btn-custom ${currentSlide === 2 ? "active" : ""}`} onClick={() => setCurrentSlide(2)}></a>
            <a href="#slide3" className={`btn-custom ${currentSlide === 3 ? "active" : ""}`} onClick={() => setCurrentSlide(3)}></a>
          </div>
        </div>

        <div
          id="slide2"
          className={`carousel-item relative w-full ${currentSlide === 2 ? "block" : "hidden"}`}
        >
          <img
            src={product}
            className="mx-auto w-[400px] h-[400px]"
            alt="Slide 2"
          />
          <div className="gap-3 -my-8 flex -translate-y-1/2 transform justify-center">
            <a href="#slide1" className={`btn-custom ${currentSlide === 1 ? "active" : ""}`} onClick={() => setCurrentSlide(1)}></a>
            <a href="#slide2" className={`btn-custom ${currentSlide === 2 ? "active" : ""}`} onClick={() => setCurrentSlide(2)}></a>
            <a href="#slide3" className={`btn-custom ${currentSlide === 3 ? "active" : ""}`} onClick={() => setCurrentSlide(3)}></a>
          </div>
        </div>

        <div
          id="slide3"
          className={`carousel-item relative w-full ${currentSlide === 3 ? "block" : "hidden"}`}
        >
          <img
            src={riderImg}
            className="mx-auto w-[400px] h-[400px]"
            alt="Slide 3"
          />
          <div className="gap-3 -my-8 flex -translate-y-1/2 transform justify-center">
            <a href="#slide1" className={`btn-custom ${currentSlide === 1 ? "active" : ""}`} onClick={() => setCurrentSlide(1)}></a>
            <a href="#slide2" className={`btn-custom ${currentSlide === 2 ? "active" : ""}`} onClick={() => setCurrentSlide(2)}></a>
            <a href="#slide3" className={`btn-custom ${currentSlide === 3 ? "active" : ""}`} onClick={() => setCurrentSlide(3)}></a>
          </div>
        </div>
    </div>
      </>
    );
}