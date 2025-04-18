import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardPaymentForm from './CardPaymentForm';
import UPIPaymentForm from './UPIPaymentForm';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Pull cart values from Redux
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryCharges = useSelector((state) => state.cart.deliveryCharges);
  const taxes = useSelector((state) => state.cart.taxes);
  const grandTotal = useSelector((state) => state.cart.grandTotal);

  const handlePayment = () => {
    // Fake a delay for animation
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 1000);
  };

  return (
    <div className="payment-container">
      {paymentSuccess ? (
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="background"></div>
            <div className="checkmark">&#10004;</div>
          </div>
          <h2>Payment Successful!</h2>
          <p>Thank you for your order </p>
        </div>
      ) : (
        <>
          <h2 className="payment-title">Payment</h2>
          <div className="payment-grid">
            {/* Order Summary */}
            <div className="payment-card">
              <h3 className="payment-subtitle">Order Summary</h3>
              <ul className="summary-list">
                <li><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></li>
                <li><span>Shipping</span><span>₹{deliveryCharges.toFixed(2)}</span></li>
                <li><span>Taxes</span><span>₹{taxes.toFixed(2)}</span></li>
                <li className="total"><span>Total</span><span>₹{grandTotal.toFixed(2)}</span></li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="payment-card">
              <h3 className="payment-subtitle">Choose Payment Method</h3>
              <div className="payment-options">
                {['card', 'upi', 'cod'].map((method) => (
                  <label key={method} className={`payment-option ${paymentMethod === method ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                    {method === 'card' && 'Credit / Debit Card'}
                    {method === 'upi' && 'UPI (Google Pay / PhonePe)'}
                    {method === 'cod' && 'Cash on Delivery'}
                  </label>
                ))}
              </div>

              {/* Show payment form based on selected method */}
              {paymentMethod === 'card' && <CardPaymentForm />}
              {paymentMethod === 'upi' && <UPIPaymentForm />}

              <button className="pay-button mt-3" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentPage;
