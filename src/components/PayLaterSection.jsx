import React from 'react';
import InvoiceOption from './InvoiceOption';
import CampaignOption from './CampaignOption';

export default function PartPaymentSection({paymentOptions, purchaseData, handleClick, selectedOption}) {
  return(
  <>
    <div className="category-title">Fracciona tu pago</div>
    <div className="category-subtitle">Hoy paga sólo la primera cuota</div>
    <div className="pm-container">
      {paymentOptions.hasOwnProperty('i1') && <InvoiceOption totalPrice={purchaseData.price / 100} paymentOptions={paymentOptions.i1} onClick={handleClick} selectedOption={selectedOption} />}
      {paymentOptions.hasOwnProperty('pp5') && <CampaignOption totalPrice={purchaseData.price / 100} paymentOptions={paymentOptions.pp5} onClick={handleClick} selectedOption={selectedOption} />}
    </div>
  </>
  )
}