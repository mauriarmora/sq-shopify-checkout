import React from 'react';

export default function InvoiceOption({totalPrice, paymentOptions, onClick, selectedOption}) {

  // Setting checked true or false depending on wich option is selected
  const handleChecked = () => selectedOption === 'invoice-select' ? true : false;

  return(
    <div>
      <div className="pm-header invoice-dropdown">
        <form>
          <div>
            <input type="radio" name="invoice-select" checked={handleChecked()} onClick={onClick}/>
            <label className="pm-title" htmlFor="invoice-select">Paga después</label>
          </div>
        </form>       
        <div className="pm-no-cost">Sin coste adicional</div>
      </div>

      <div className={`invoice-dropdown ${handleChecked() ? 'pm-dropdown-selected' : 'pm-dropdown-hidden'}`}>
        <div className="invoice-info">Paga en 7 días sin coste extra</div>
        <div className="invoice-info">Cuando se envíe la compra, recibirás un enlace seguro de pago</div>
        <div className="invoice-info">Tendrás 7 días para pagar. Si necesitas más, te los damos</div>
        <div className="invoice-info">Te informaremos en todo momento por mail</div>
      </div>
    </div>
  );
}