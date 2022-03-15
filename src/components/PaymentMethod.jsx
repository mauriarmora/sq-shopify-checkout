import React from 'react';

export default function PaymentMethod({pmInfo, onSelect, selectedMethod, paymentOption}) {

  // Comparing the selected PM in the state and the current PM, so it knows if it's the one selected
  const checked = () => selectedMethod === pmInfo.product ? true : false;

  return(
    <div>
      <div className="pm-header">
          <div>
            <input type="radio" name="product_code" checked={checked()} value={pmInfo.product} onClick={onSelect}/>
            <label className="pm-title" htmlFor="pm-select">{pmInfo.title}</label>
          </div>
        <div className="pm-claim">{pmInfo.claim}</div>
      </div>

      {/* If the PM does not have description, it doesn't render the dropdown */}
      {pmInfo.description !== null &&
        <div
          className={checked() ? 'pm-dropdown-selected' : 'pm-dropdown-hidden'} 
          style={{ borderRadius: paymentOption.methods.length > 1 && '3px 3px 0 0'}}
        >
          <div className="pm-info">{pmInfo.description}</div>
        </div>
      }
        
    </div>
  );
}