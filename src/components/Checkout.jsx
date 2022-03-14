import React from 'react';
import PaymentMethod from './PaymentMethod';

class Checkout extends React.Component {

  constructor(props) {
    super(props)
    this.shopName = props.shopName
    this.totalPrice = props.totalPrice
    this.paymentOptions = props.paymentOptions
    this.destURL = props.destURL
    this.state = {
      paymentOption: "",
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({
      paymentOption: event.target.value
    });
  }

  handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
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

          <form 
            // action={"http://shopify.com" + this.state.paymentOption}
            value={this.state.paymentOption}
            onSubmit={this.handleSubmit}
          >
            {this.paymentOptions.map((po, i) => {
              return (
              <>
                <div key={i} className="category-title">{po.title}</div>
                <div className="category-description">{po.description}</div>
                <div className="pm-container"> 
                  
                  {po.methods.map((pm, i) => <PaymentMethod pmInfo={pm} paymentOption={po} onSelect={this.handleSelect}/> )}

                </div>
              </>

            )})}

            <div className="button-container">
              <a className="back-link" href="http://shopify.com">Volver a pagos</a>
              <button type="submit" className="submit-button">Continuar</button>
            </div>

          </form>
        </div>  
      </div>
    )
  }
}

export default Checkout