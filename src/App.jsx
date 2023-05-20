import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./layouts/WelcomePage";
import Auth from "./features/auth/Auth"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Auth />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
