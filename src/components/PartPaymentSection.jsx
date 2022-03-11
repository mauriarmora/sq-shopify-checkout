import React from 'react';
import SplitPaymentOption from './SplitPaymentOption';
import PartPaymentOption from './PartPaymentOption';

export default function PartPaymentSection({paymentOptions, purchaseData, handleClick, selectedOption}) {
  return(
  <>
    <div className="category-title">Fracciona tu pago</div>
    <div className="category-subtitle">Hoy paga sólo la primera cuota</div>
    <div className="pm-container">
      {paymentOptions.hasOwnProperty('sp1') && <SplitPaymentOption totalPrice={purchaseData.price / 100} paymentOptions={paymentOptions.sp1} onClick={handleClick} selectedOption={selectedOption} />}
      {paymentOptions.hasOwnProperty('pp3') && <PartPaymentOption totalPrice={purchaseData.price / 100} paymentOptions={paymentOptions.pp3} onClick={handleClick} selectedOption={selectedOption} />}
    </div>
  </>
  )
}