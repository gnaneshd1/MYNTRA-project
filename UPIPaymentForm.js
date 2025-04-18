import React from 'react';
import img from '../assets/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';

const UPIPaymentForm = () => {
  return (
    <div className="upi-form text-center">
      <p>Scan this QR code using any UPI app to pay</p>
      <img src={img} alt="UPI QR Code" style={{ width: '200px' }} />
    </div>
  );
};

export default UPIPaymentForm;
