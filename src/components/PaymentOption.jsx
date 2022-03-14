import React from 'react';

export default function PaymentOption({pmInfo, onSelect}) {

  return(
    <div>
      <div className="pm-header">
          <div>
            <input type="radio" name="payment-option" value={pmInfo.product} onClick={onSelect}/>
            <label className="pm-title" htmlFor="pm-select">{pmInfo.title}</label>
          </div>
        <div className="pm-claim">{pmInfo.claim}</div>
      </div>

      <div className="pm-dropdown">
        <div className="pm-info">{pmInfo.description}</div>
      </div>     
    </div>
  );
}