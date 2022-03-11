import React from 'react';

export default function CampaignOption({totalPrice, paymentOptions, onClick, selectedOption}) {

  // Calculate payment month
  const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const date = new Date();
  const day = date.getDate();

  // Setting checked true or false depending on wich option is selected
  const handleChecked = () => selectedOption === 'campaign-select' ? true : false;

  return(
    <div>
      <div className="pm-header">
        <form>
          <div>
            <input type="radio" name="campaign-select" checked={handleChecked()} onClick={onClick}/>
            <label className="pm-title" htmlFor="campaign-select">Desde {(totalPrice / 4).toFixed(2)} €/mes</label>
          </div>
        </form>
        <div className="pm-no-cost">+{(paymentOptions.instalmentFee / 100).toFixed(2)} €</div>
      </div>

      <div className={`"pp-dropdown" ${handleChecked() ? 'pm-dropdown-selected' : 'pm-dropdown-hidden'}`}>
        <div className="pm-info">Pago automático</div>
        <div className="pm-info">Amortiza cuando quieras sin costes ni penalizaciones</div>

      </div>
    </div>
  );
}