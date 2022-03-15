import React from 'react';
import Form from './Form';

class Checkout extends React.Component {

  constructor(props) {
    super(props)
    this.shopName = props.shopName
    this.totalPrice = props.totalPrice
    this.paymentOptions = props.paymentOptions
    this.destURL = props.destURL
    this.orderUUID = props.orderUUID
    this.cancelURL = props.cancelURL
    this.state = {
      selectedMethod: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  // Saving the selected payment method in the state
  handleSelect(e) {
    this.setState({
      selectedMethod: e.target.value
    });
  }

  render() {
    return(
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <div className="logo-wrapper">
          <img
            width="100%"
            height="100%"
            alt="SeQura Logo"
            src="https://live.sequracdn.com/assets/images/logos/logo.svg"
          />
          </div>

          <div className="summary">
            <div id="shop-name">{this.shopName.toUpperCase()}</div>
            <div className="total-flex">
              <div className="total">Total</div>  
              <div className="total-price">{(this.totalPrice / 100).toFixed(2)} €</div>
            </div>
          </div>

          { (this.paymentOptions.length === 0) &&
            <>
              <div className="no-pm-available">No hay métodos de pago disponibles</div>
              <a className="back-link" href={this.cancelURL}>Volver a pagos</a>
            </>
          }
          { (this.paymentOptions.length !== 0) &&
            <Form 
              paymentOptions={this.paymentOptions} 
              destURL={this.destURL} 
              orderUUID={this.orderUUID} 
              selectedMethod={this.state.selectedMethod}
              cancelURL={this.cancelURL}
              handleSelect={this.handleSelect}
            />
          }

        </div>  
      </div>
    );
  }
}

export default Checkout