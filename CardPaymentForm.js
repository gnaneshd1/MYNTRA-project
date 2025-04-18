import React from 'react';

const CardPaymentForm = () => {
  return (
    <div className="card-form">
      <input type="text" placeholder="Cardholder Name" className="form-control my-2" />
      <input type="text" placeholder="Card Number" className="form-control my-2" />
      <div className="d-flex gap-2">
        <input type="text" placeholder="MM/YY" className="form-control" />
        <input type="text" placeholder="CVV" className="form-control" />
      </div>
    </div>
  );
};

export default CardPaymentForm;
