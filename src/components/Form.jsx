import React from 'react';
import PaymentMethod from './PaymentMethod';

export default function Form({ paymentOptions, destURL, orderUUID, selectedMethod, handleSelect, cancelURL }) {

  // Returning the description of the payment category
  function categoryDescription(title) {
    if (title === 'Paga ahora') {
      return 'Con tarjeta de crédito o débito';
    } else if (title === 'Paga Después') {
      return 'Confirma la compra con tus datos personales';
    } else if (title === 'Paga Fraccionado') {
      return 'Hoy solo pagas la primera cuota';
    }
  }

  const buttonDisabled = selectedMethod === '' ? true : false;

  return(
    <form action={destURL} method="get">

      <input key="order_uuid" type="hidden" name="order_uuid" value={orderUUID}/>
    
      {/* Looping through the payment categories and rendering them */}
      {paymentOptions.map((po, i) => {
        if (po.methods.length !== 0) return (
          <div key={i}>
            <div className="category-title">{po.title}</div>
            <div className="category-description">{categoryDescription(po.title)}</div>
            <div className="pm-container"> 
              
              {/* Looping througn the payment methods of each of the categories and rendering them */}
              {po.methods.map((pm, j) => {
                return(
                  <PaymentMethod
                    key={j}
                    pmInfo={pm} 
                    paymentOption={po} 
                    selectedMethod={selectedMethod} 
                    onSelect={handleSelect}
                  />
                )})}

            </div>
          </div>
        )})}

      <div key="button-container" className="button-container">
        <a className="back-link" href={cancelURL}>Volver a pagos</a>
        <button 
          type="submit" 
          disabled={buttonDisabled}
          className="submit-button"
          style={{ backgroundColor: buttonDisabled && "#BBBBBB", cursor: buttonDisabled && "default" }}
        >Continuar
        </button>
      </div>

    </form>
  );
}