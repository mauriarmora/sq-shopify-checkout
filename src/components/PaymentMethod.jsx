import React from 'react';
import Pp3PaymentMethod from './Pp3PaymentMethod';

export default function PaymentMethod({pmInfo, onSelect, selectedMethod, paymentOption}) {

  // Comparing the selected PM in the state and the current PM, so it knows if it's the one selected
  const checked = selectedMethod === pmInfo.product ? true : false;

  const pmDescription = pmInfo.description.split(/<br \/>|<br\/>/g);

  return(
    <div>
      <div className="pm-header" style={{ borderRadius: checked && '3px 3px 0 0'}}>
        <div>
          <input id={pmInfo.product} type="radio" name="product_code" readOnly checked={checked} value={ pmInfo.product } onClick={ onSelect }/>
          <label className="pm-title" htmlFor={pmInfo.product}>{ pmInfo.title }</label>
        </div>
        <div className="pm-claim">{ pmInfo.claim }</div>
      </div>

      {/* If the PM does not have description, it doesn't render the dropdown */}
      {pmInfo.description !== null &&
        <div
          className={checked ? 'pm-dropdown-selected' : 'pm-dropdown-hidden'} 
          style={{ borderRadius: paymentOption.methods.length > 1 && '3px 3px 0 0' }}
        >
          {/* If the PM is PP3 it renders the component where it displays the instalments */}
          {(pmInfo.product === 'pp3') && 
            <Pp3PaymentMethod pmDescription={pmDescription} />
          }

          {pmInfo.product !== 'pp3' && <div className="pm-description">{ pmDescription.map((pm, i) => <li key={i}>{pm}</li>) }</div> }
        </div>
      }

    </div>
  )
}