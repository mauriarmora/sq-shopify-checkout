import React from 'react';
import { ReactComponent as SplitPaymentTimeline } from '../assets/sp1-timeline.svg';

export default function SplitPaymentOption({totalPrice, onClick, selectedOption}) {

  // Calculating next payment's date
  const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const date = new Date();
  const day = date.getDate();
  const secondPayment = `${day} ${MONTHS[date.getMonth()]}`;
  const lastPayment = `${day} ${MONTHS[date.getMonth() + 1]}`;

  // Setting checked true or false depending on wich option is selected
  const handleChecked = () => selectedOption === 'sp1-select' ? true : false;

  return(
    <div>
      <div className="pm-header sp-dropdown">
        <form>
          <div>
            <input type="radio" name="sp1-select" checked={handleChecked()} onClick={onClick}/>
            <label className="pm-title" htmlFor="sp1-select">{(totalPrice / 3).toFixed(2)} €/mes en 3 meses</label>
          </div>
        </form>       
        <div className="pm-no-cost">Sin coste adicional</div>
      </div>

      <div className={`sp-dropdown ${handleChecked() ? 'pm-dropdown-selected' : 'pm-dropdown-hidden'}`}>
          <div className="pm-info">Pago automático</div>
          <div className="pm-info">Amortiza cuando quieras sin costes ni penalizaciones</div>

          <div className="timeline-months">
            <div className="first-payment-day">Hoy</div>
            <div className="second-payment-day">{secondPayment}</div>
            <div className="last-payment-day">{lastPayment}</div>
          </div>

          <div className="pm-timeline">
            <SplitPaymentTimeline />
          </div>

          <div className="timeline-payment">
            <div className="first-payment">{(totalPrice / 3).toFixed(2)} €</div>
            <div className="second-payment">{(totalPrice / 3).toFixed(2)} €</div>
            <div className="last-payment">{(totalPrice / 3).toFixed(2)} €</div>
          </div>
      </div>
    </div>
  );
}