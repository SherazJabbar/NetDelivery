import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./layouts/WelcomePage";
import Auth from "./features/auth/Auth";
import DeliverToAddress from "./features/cart/DeliverToAddress";
import PickupPage from "./features/deliveryPickup/DeliveryPickup";
import NetAccess from "./layouts/NetAccess";
import Orders from "./features/profile/orders/Orders";
import Favourites from "./features/profile/favourites/Favourites";
import ItemView from "./features/cart/ItemView";
import Checkout from "./features/cart/Checkout";
import PaymentMethods from "./features/profile/payment/paymentMethods";
import AddPaymentMethod from "./features/profile/payment/AddPaymentMethod";
import CardDetail from "./features/profile/payment/CardDetail";
import PaymentOptions from "./features/cart/PaymentOptions";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/deliver-to-address" element={<DeliverToAddress />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/netaccess" element={<NetAccess />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/view-item" element={<ItemView />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-methods" element={<PaymentMethods />} />
        <Route path="/add-payment-method" element={<AddPaymentMethod />} />
        <Route path="/add-card-details" element={<CardDetail />} />
        <Route path="/add-payment-options" element={<PaymentOptions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
