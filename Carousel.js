import React from 'react'

function Carousel() {
  return (
    

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height : "85vh"}} src="https://img.freepik.com/free-psd/smartphone-camera-control-social-media-banner-design-template_47987-25416.jpg?t=st=1744971365~exp=1744974965~hmac=d8f503ba2badf0d97a7399ae4e45c8e81c20991225a38e70ef3c5c83dc4a5efb&w=1480" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height : "85vh"}} src="https://img.freepik.com/free-vector/horizontal-banner-template-india-independence-day-celebration_23-2150602622.jpg?t=st=1744971866~exp=1744975466~hmac=6333113358dd53f33240ecfcccc5c98250e2868d0310847c11308a9aabda0827&w=1380" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height : "85vh"}}  src="https://img.freepik.com/free-psd/black-friday-sale-social-media-cover-design-template_47987-25244.jpg?t=st=1744971697~exp=1744975297~hmac=9f7d4fafb349aecf0dc69ed6114cfa4b3acf632b9c7e6e87acb841ad4ae65aa3&w=1380"
       className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>




    </div>
  )
}

export default Carousel