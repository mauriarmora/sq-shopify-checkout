import './App.scss';
import Checkout from './components/Checkout';

function App() {
  return (
    <Checkout destUrl={"https://shopify.errebal.net/shopify_v2/form"} totalPrice={30000} shopName={'aquabona'} paymentOptions={[
      {
        "title": "Paga ahora",
        "description": null,
        "icon": null,
        "methods": [
          {
            "product": "fp1",
            "campaign": "permanente",
            "title": "Paga con tarjeta",
            "long_title": "Paga con tarjeta",
            "claim": "Con tarjeta de crédito o débito",
            "description": null,
            "cost": {
              "setup_fee": 0,
              "instalment_fee": 0,
              "down_payment_fees": 0,
              "instalment_total": 0
            },
            "cost_description": null,
            "starts_at": "2022-01-01T00:00:00+01:00",
            "ends_at": "2024-01-02T00:12:00+01:00",
            "widget": null,
            "info_widget": null
          }
        ]
      },
      {
        "title": "Paga Después",
        "description": null,
        "icon": null,
        "methods": [
          {
            "product": "i1",
            "campaign": null,
            "title": "Paga Después",
            "long_title": "Paga después. 7 días desde el envío",
            "claim": "Sin coste adicional",
            "description": "Compra ahora, recibe primero y paga después.<br/>Cuando tu pedido salga de la tienda tendrás 7 días para realizar el pago desde el enlace que recibirás en tu email o mediante transferencia bancaria.",
            "cost": {
              "setup_fee": 0,
              "instalment_fee": 0,
              "down_payment_fees": 0,
              "instalment_total": 0
            },
            "cost_description": "sin coste adicional",
            "starts_at": "2022-01-07T00:12:00+01:00",
            "ends_at": "2024-01-01T00:12:00+01:00",
            "widget": null,
            "info_widget": null
          }
        ]
      },
      {
        "title": "Paga Fraccionado",
        "description": null,
        "icon": null,
        "methods": [
          {
            "product": "sp1",
            "campaign": "permanente",
            "title": "Divide tu pago en 3",
            "long_title": "Divide en 3 partes de 43,00 €/mes",
            "claim": "¡Gratis!",
            "description": "Paga tu compra en 3 meses por solo un coste de apertura en el primer pago. Al instante, sin papeleos ni trucos.",
            "cost": {
              "setup_fee": 0,
              "instalment_fee": 0,
              "down_payment_fees": 0,
              "instalment_total": 4300
            },
            "cost_description": null,
            "starts_at": "2022-01-06T00:12:00+01:00",
            "ends_at": "2024-01-02T00:12:00+01:00",
            "widget": null,
            "info_widget": null
          },
          {
            "product": "pp3",
            "campaign": null,
            "title": "Paga Fraccionado",
            "long_title": "Paga Fraccionado",
            "claim": "en 3, 6 o 12 meses",
            "description": "Fracciona el pago al momento y sin papeleo. Elige entre 3, 6 o 12 meses solo con un pequeño coste fijo al mes.",
            "cost": {
              "setup_fee": 0,
              "instalment_fee": 300,
              "down_payment_fees": 300,
              "instalment_total": 1375
            },
            "cost_description": "desde 13,75 €/cuota",
            "starts_at": "2022-01-01T00:11:00+01:00",
            "ends_at": "2027-01-07T00:12:00+01:00",
            "widget": null,
            "info_widget": null
          }
        ]
      }
    ]} />
  );
}

export default App;
