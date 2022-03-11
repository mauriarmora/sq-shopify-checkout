import { React, useState } from 'react';
import { ReactComponent as SequraLogo } from '../assets/sequra-logo.svg';
import InvoiceOption from './InvoiceOption';
import CampaignOption from './CampaignOption';
import PartPaymentSection from './PartPaymentSection';
import PayLaterSection from './PayLaterSection';

export default function Checkout() {
  const [selectedOption, setSelectedOption] = useState('');

  const paymentOptions= {
    sp1: {
      product: 'sp1',
      instalmentFee: 0
    },
    pp3: {
      product: 'pp3',
      instalmentFee: 0
    },
    i1: {
      product: 'i1',
      instalmentFee: 0
    },
    pp5: {
      product: 'pp5',
      instalmentFee: 295
    }
  }

  const purchaseData = {
    name: 'Valentina',
    surname: 'Garcia',
    merchant: 'sonopro',
    product: 'Curso de producción',
    price: 30000
  }

  const handleClick = (e) => setSelectedOption(e.target.name);

  return(
    <div className="checkout-wrapper">
      <div className="checkout-container">
        <div className="logo-wrapper">
          <SequraLogo />
        </div>

        <div className="summary">
          <div id="shopper-name">{purchaseData.name.toUpperCase()}</div>
          <div className="total-flex">
            <div className="total">Total</div>  
            <div className="total-price">{(purchaseData.price / 100).toFixed(2)} €</div>
          </div>
        </div>

        {/* Rendering Part Payment Section if one of the part payment methods are available */}
        {(paymentOptions.hasOwnProperty('sp1') || paymentOptions.hasOwnProperty('pp3')) && <PartPaymentSection paymentOptions={paymentOptions} purchaseData={purchaseData} handleClick={handleClick} selectedOption={selectedOption}/>}

        {/* Rendering Pay Later Section if one of the pay later methods are available */}
        {(paymentOptions.hasOwnProperty('i1') || paymentOptions.hasOwnProperty('pp5')) && <PayLaterSection paymentOptions={paymentOptions} purchaseData={purchaseData} handleClick={handleClick} selectedOption={selectedOption}/>}

      </div>  
    </div>
  )
}