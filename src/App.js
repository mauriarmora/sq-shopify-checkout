import './App.scss';
import Checkout from './components/Checkout';

function App() {
  return (
    <Checkout destURL={"https://pay.errebal.net/shopify_v2/form"} orderUUID={'qwert12345'} cancelURL={"http://shopify.com"} totalPrice={30000} shopName={'aquabona'} paymentOptions={[

    ]} />
  );
}

export default App;
