import React from 'react';
import Navbar from "../Components/Navbar";
import Carousel from '../Components/Carousel';
import Ads from '../Components/Ads';
import ProductSection from '../Components/ProductSection';
import '../App.css';

function Home() {
  let productArray = ['iphone', 'ipad', 'macbook', 'samsung'];

  return (
    <>
      <Navbar />
      
      <div className='container-fluid bg-white mt-5 pt-3'>
        <div className='row'>
          <Carousel />
        </div>
      </div>
     

      <div className='container-fluid bg-white mt-5 pt-3'>
        <div className='row'>
          <Ads />
        </div>
      </div>
      
     
    

      <div className='container bg-white'>
        <div className='row'>
          <ProductSection products={productArray} />
        </div>
      </div>

     

    </>
  );
}

export default Home;
