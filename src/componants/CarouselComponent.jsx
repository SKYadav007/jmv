import React from "react";
import image1 from "../assets/jmv-bg.png"

const CarouselComponent = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image1} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={image1} className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

     
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
