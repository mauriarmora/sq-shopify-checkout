import { React, useState } from 'react';
import { ReactComponent as SequraLogo } from '../assets/sequra-logo.svg';
import SplitPaymentOption from './SplitPaymentOption';
import PartPaymentOption from './PartPaymentOption';
import InvoiceOption from './InvoiceOption';
import CampaignOption from './CampaignOption';

export default function Checkout() {
  const [selectedOption, setSelectedOption] = useState('');

  const shopperName = 'Valentina';
  const totalPrice = 99;

  const handleClick = (e) => setSelectedOption(e.target.name);

  return(
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <div className="logo-wrapper">
          <SequraLogo />
        </div>

        <div className="summary">
          <div id="shopper-name">{shopperName.toUpperCase()}</div>
          <div className="total-flex">
            <div className="total">Total</div>  
            <div className="total-price">{totalPrice.toFixed(2)} €</div>
          </div>
        </div>

        <div className="category-title">Fracciona tu pago</div>
        <div className="category-subtitle">Hoy paga sólo la primera cuota</div>

        <div className="pm-container">
          <SplitPaymentOption totalPrice={totalPrice} onClick={handleClick} selectedOption={selectedOption} />
          <PartPaymentOption totalPrice={totalPrice} onClick={handleClick} selectedOption={selectedOption} />
        </div>

        <div className="category-title">No lo pagues ahora</div>
        <div className="category-subtitle">Confirma la compra sólo con tus datos personales</div>

        <div className="pm-container">
          <InvoiceOption totalPrice={totalPrice} onClick={handleClick} selectedOption={selectedOption} />
          <CampaignOption totalPrice={totalPrice} onClick={handleClick} selectedOption={selectedOption} />
        </div>

      </div>  
    </div>
  )
}