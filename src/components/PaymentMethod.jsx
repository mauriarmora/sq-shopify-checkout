import React from 'react';

export default function PaymentMethod({pmInfo, onSelect, paymentOption}) {

  return(
    <div>
      <div className="pm-header">
          <div>
            <input type="radio" name="payment-option" value={pmInfo.product} onClick={onSelect}/>
            <label className="pm-title" htmlFor="pm-select">{pmInfo.title}</label>
          </div>
        <div className="pm-claim">{pmInfo.claim}</div>
      </div>

      {/* The dropdown doesn't show if there's no description */}
      {pmInfo.description !== null &&

        // If there's two payment methods in on payment section, the bottom border-radius is 0
        <div className="pm-dropdown" style={{ borderRadius: paymentOption.methods.length > 1 && '3px 3px 0 0'}}>
          <div className="pm-info">{pmInfo.description}</div>
        </div>
        
      }
        
    </div>
  );
}