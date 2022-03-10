import React from 'react';

export default function PartPaymentOption({totalPrice, onClick, selectedOption}) {

  // Setting checked true or false depending on wich option is selected
  const handleChecked = () => selectedOption === 'pp3-select' ? true : false;

  return(
    <div>
      <div className="pm-header">
        <form>
          <div>
            <input type="radio" name="pp3-select" checked={handleChecked()} onClick={onClick}/>
            <label className="pm-title" htmlFor="pp3-select">Desde {(totalPrice / 4).toFixed(2)} €/mes</label>
          </div>
        </form>       
      </div>

      <div className={`"pp-dropdown" ${handleChecked() ? 'pm-dropdown-selected' : 'pm-dropdown-hidden'}`}>
        <div className="pm-info">Pago automático</div>
        <div className="pm-info">Amortiza cuando quieras sin costes ni penalizaciones</div>

        <div className="timeline-months">
          <div className="first-pm-payment">4 meses</div>
          <div className="second-pm-payment">6 meses</div>
          <div className="last-pm-payment">12 meses</div>
        </div>

        <div className="timeline-payment">
          <div className="first-pm-payment">{(totalPrice / 4).toFixed(2)} €/mes</div>
          <div className="second-pm-payment">{(totalPrice / 6).toFixed(2)} €/mes</div>
          <div className="last-pm-payment">{(totalPrice / 12).toFixed(2)} €/mes</div>
        </div>
      </div>
    </div>
  );
}