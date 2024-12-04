import "./App.css";


/// @ react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/// @component
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
import ProductDetail from "./pages/Dashboard/Admin/product-management/[id]/ProductDetail";
import AddNewProduct from "./pages/Dashboard/Admin/product-management/AddNewProduct";
import PrivateRoute from "./pages/protected/AuthenticatedRoute";
import TransactionView from "./pages/Dashboard/Admin/transaction-management/transaction-view";
import CourseManagementView from "./pages/Dashboard/Admin/course-management/course-management-view";
import CreateNewCourse from "./pages/Dashboard/Admin/course-management/create-course-view";
// @ config
import toast, { Toaster } from "react-hot-toast";
import { paths } from "./config/endPoint";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Routes không cần đăng nhập */}
          <Route path={paths.root} element={<HomeView />} />
          <Route path="*" element={<InternalPage />} />
          <Route path={paths.auth.login} element={<LoginView />} />
          <Route path={paths.auth.register} element={<RegisterView />} />
          <Route path={paths.product.root} element={<ProductView />} />


          {/* Routes yêu cầu đăng nhập */}
          <Route
            element={<PrivateRoute element={<Dashboard />} />}
          >
            <Route path={paths.dashboard.root} element={<Dashboard />} />
            <Route path={paths.dashboard.product} element={<ProductManageMentview />} />
            <Route path={paths.dashboard.transaction} element={<TransactionView/>} />

            <Route path={paths.dashboard.product_detail} element={<ProductDetail />} />
            <Route path={paths.dashboard.addnew_product} element={<AddNewProduct />} />
            <Route path={paths.dashboard.account} element={<AccountView />} />
            <Route path={paths.dashboard.courses} element={<CourseManagementView />} />
            <Route path={paths.dashboard.courses_create} element={<CreateNewCourse/>} />

            

          </Route>

          {/* Routes độc lập, không nên nằm trong /dashboard */}
          <Route path="" element={<PrivateRoute />}>
            <Route path={paths.checkout.root} element={<Checkout />} />
          </Route>



        </Routes>
        {/* Bỏ Footer nếu không cần */}
        {/* <Footer /> */}
        <CartFixed />
      </Router>
      <Toaster />
    </>
  );
}

export default App;
