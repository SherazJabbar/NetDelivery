import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./layouts/WelcomePage";
import Auth from "./features/auth/Auth";
import DeliverToAddress from "./features/cart/DeliverToAddress";
import PickupPage from "./features/deliveryPickup/DeliveryPickup"
import NetAccess from "./layouts/NetAccess"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/deliver-to-address" element={<DeliverToAddress />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/netaccess" element={<NetAccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
