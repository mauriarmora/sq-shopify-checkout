import React from 'react';
import PaymentOption from './PaymentOption';

class Checkout extends React.Component {

  constructor(props) {
    super(props)
    this.shopName = props.shopName
    this.totalPrice = props.totalPrice
    this.paymentOptions = props.paymentOptions
    this.destURL = props.destURL
    this.state = {
      paymentOption: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelect(event) {
    this.setState({
      paymentOption: event.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.paymentOption);
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
            action={"http://programminghead.com" + this.state.paymentOption}
            // onSubmit={this.handleSubmit}
          >
            {this.paymentOptions.map((po, i) => {
              return (
              <>
                <div key={i} className="category-title">{po.title}</div>
                <div className="category-description">{po.description}</div>
                
                <div className="pm-container"> 
                  {po.methods.map((pm, i) => {
                    return <PaymentOption key={i} pmInfo={pm} onSelect={this.handleSelect} />
                  })}
                </div>
              </>
            )})}

            <div className="button-container">
              <button type="submit" className="submit-button">Continuar</button>
            </div>

          </form>

          {/* Rendering Part Payment Section if one of the part payment methods are available
          {(paymentOptions.hasOwnProperty('sp1') || paymentOptions.hasOwnProperty('pp3')) && <PartPaymentSection paymentOptions={paymentOptions} purchaseData={purchaseData} handleClick={handleClick} selectedOption={selectedOption}/>}

          {/* Rendering Pay Later Section if one of the pay later methods are available */}
          {/* {(paymentOptions.hasOwnProperty('i1') || paymentOptions.hasOwnProperty('pp5')) && <PayLaterSection paymentOptions={paymentOptions} purchaseData={purchaseData} handleClick={handleClick} selectedOption={selectedOption}/>} */}

        </div>  
      </div>
    )
  }
}

export default Checkout