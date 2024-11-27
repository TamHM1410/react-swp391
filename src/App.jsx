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
import Dashboard from "./pages/Dashboard/Dashboard";

import ProductManageMentview from "./pages/Dashboard/Admin/product-management/product-management-view";
import { paths } from "./config/endPoint";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={paths.root}  element={<HomeView/>}/>
          <Route path="*" element={<InternalPage />} />
          <Route path={paths.auth.login} element={<LoginView />} />
          <Route path={paths.auth.register} element={<RegisterView />} />
          <Route path={paths.product.root} element={<ProductView/>} />
          <Route path={paths.checkout.root} element={<Checkout/>} />

          <Route path={paths.dashboard.account} element={<AccountView/>} />
          <Route path={paths.dashboard.root} element={<Dashboard/>} />
          <Route path={paths.dashboard.product} element={<ProductManageMentview/>} />



          
        </Routes>
        {/* <Footer/> */}
        <CartFixed/>
      </Router>
    </>
  );
}

export default App;
