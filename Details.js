import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Components/Navbar'; // ✅ if folder is 'components' and file is 'Navbar.js'
import Productdetails from '../Components/Productdetails'; // adjust the path

function Details() {
  const product = useSelector((state) => state.currentProduct.product); // adjust this to the actual state slice you are using
  
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>

      <div className="container">
        <Productdetails product={product} />
      </div>
    </>
  );
};

export default Details;
