import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InternalPage from "./pages/protected/404";
import LoginView from "./pages/auths/login";
import RegisterView from "./pages/auths/register";
import ProductView from "./pages/products/products";
import CartFixed from "./components/Cart-fixed";
import Checkout from "./pages/checkout/checkout";
import AccountView from "./pages/Dashboard/Account/account";
import HomeView from "./pages/home/home-view";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/"  element={<HomeView/>}/>
          <Route path="*" element={<InternalPage />} />
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
          <Route path="/products" element={<ProductView/>} />
          <Route path="/checkout" element={<Checkout/>} />

          <Route path="/dashboard/account" element={<AccountView/>} />
          
        </Routes>
        {/* <Footer/> */}
        <CartFixed/>
      </Router>
    </>
  );
}

export default App;
