import React, { useState, useEffect } from 'react';
import Form from './Form';

const Checkout = ({ destURL, orderUUID, cancelURL, totalPrice, shopName, paymentOptions }) => {

  const [selectedMethod, setSelectedMethod] = useState('');
  const [availablePaymentMethods, setAvailablePaymentMethods] = useState([]);

  // Saving the selected payment method in the state
  const handleSelect = (e) => setSelectedMethod( e.target.value );

  useEffect(() => {
    paymentOptions.filter(p => p.length !== 0).map(po => {
      return po.methods.map(pm => {
       return setAvailablePaymentMethods([...availablePaymentMethods, pm.product])
      })
    })
  }, [])

  return (
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <div className="logo-wrapper">
          <img
            width="100%"
            height="100%"
            alt="SeQura Logo"
            src="https://live.sequracdn.com/assets/images/logos/logo.svg"
          />
        </div>

        <div className="summary">
          <div id="shop-name">{shopName.toUpperCase()}</div>
          <div className="total-flex">
            <div className="total">Total</div>  
            <div className="total-price">{(totalPrice / 100).toFixed(2)} €</div>
          </div>
        </div>

        {/* Shows if no payment methods available */}
        { (availablePaymentMethods.length === 0) && 
          <>
            <div className="unavailable-message">No hay métodos de pago disponibles</div>
            <a className="back-link" href={cancelURL}>Volver a pagos</a>
          </>
        }

        {/* Shows if payment methods available */}
        { (availablePaymentMethods.length !== 0) &&
          <Form 
            paymentOptions={paymentOptions} 
            destURL={destURL} 
            orderUUID={orderUUID} 
            selectedMethod={selectedMethod}
            cancelURL={cancelURL}
            handleSelect={handleSelect}
          />
        }

      </div>  
    </div>
  )
}

export default Checkout;