import React from 'react';
import carouseltwo from '../../photo/carosul/pexels-adrienn-1458283.jpg';
import carouselone from '../../photo/carosul/pexels-lisa-fotios-1092644.jpg';
import carouselthree from '../../photo/carosul/pexels-photomix-company-887751.jpg';
 
const Carousel = () => {
    return (
        <div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative md:h-[520px]"
  data-bs-ride="carousel"
>

  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <div className="carousel-inner relative w-full overflow-hidden">
   
    <div className="carousel-item active relative float-left w-full">
      <img
        src={carouselone}
        className="block w-full rounded md:h-[520px]"
        alt="Motorbike Smoke"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-2xl text-white">Smart Phone</h5>
        <p className='text-white text-xl'>Smart Phone is a modern Phone to use very grade </p>
      </div>
    </div>

   
    <div className="carousel-item relative float-left w-full">
      <img
        src={carouseltwo}
        className="block w-full rounded md:h-[520px]"
        alt="Mountaintop"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-2xl text-white">Pixel phone</h5>
        <p className='text-white text-xl'>Pixel phone is much more popular over there!</p>
      </div>
    </div>

    
    <div className="carousel-item relative float-left w-full">
      <img
        src={carouselthree}
        className="block w-full rounded md:h-[510px]"
        alt="Woman Reading a Book"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-2xl text-white">Samsung Phone</h5>
        <p className='text-white text-xl'>Sumsung is a best phone over in there.</p>
      </div>
    </div>
  </div>
 


  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Carousel;