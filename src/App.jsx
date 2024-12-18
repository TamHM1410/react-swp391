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
import UserManagementView from "./pages/Dashboard/Admin/users/users-management-view";
import CourseView from "./pages/courses/courses-view";
import CourseDetailView from "./pages/courses/course-detail-view";
import OrderHistoryView from "./pages/Dashboard/User/order-history-view";
import CategoryView from "./pages/Dashboard/Category/category-view";
import CreateNewCategory from "./pages/Dashboard/Category/create-category";
import CourseDetail from "./pages/Dashboard/Admin/course-management/[id]/course-detail-view";
import UserDetail from "./pages/Dashboard/Admin/users/[id]/user-detail";
import TransactionDetailView from "./pages/Dashboard/Admin/transaction-management/transaction-detail";
/// shipper
import ShippingView from "./pages/Dashboard/Shipping/shipping-vew";
// @ config
import toast, { Toaster } from "react-hot-toast";
import { paths } from "./config/endPoint";

import Overview from "./pages/Dashboard/overview/overview";

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
          <Route path={"/courses"} element={<CourseView />} />
          <Route path={"/courses/:id"} element={<CourseDetailView />} />

          <Route
            path={"/dashboard/order_history"}
            element={<OrderHistoryView />}
          />

          <Route path={"/dashboard/shipping"} element={<ShippingView />} />
          <Route
            path={paths.dashboard.courses_detail}
            element={<CourseDetail />}
          />
          <Route path={"/dashboard/user/:id"} element={<UserDetail />} />

          {/* Routes yêu cầu đăng nhập */}
          <Route element={<PrivateRoute element={<Dashboard />} />}>
            <Route path={paths.dashboard.root} element={<Dashboard />} />
            <Route
              path={paths.dashboard.product}
              element={<ProductManageMentview />}
            />
            <Route
              path={paths.dashboard.transaction}
              element={<TransactionView />}
            />
            <Route
              path={paths.dashboard.transaction_detail}
              element={<TransactionDetailView />}
            />

            <Route
              path={paths.dashboard.product_detail}
              element={<ProductDetail />}
            />
            <Route
              path={paths.dashboard.addnew_product}
              element={<AddNewProduct />}
            />
            <Route path={paths.dashboard.account} element={<AccountView />} />
            <Route
              path={paths.dashboard.courses}
              element={<CourseManagementView />}
            />
            <Route
              path={paths.dashboard.courses_create}
              element={<CreateNewCourse />}
            />

            {/*Usermanagemnet*/}
            <Route
              path={paths.dashboard.user}
              element={<UserManagementView />}
            />
          </Route>

          <Route path={paths.dashboard.category} element={<CategoryView />} />
          <Route
            path={paths.dashboard.create_category}
            element={<CreateNewCategory />}
          />
          <Route path={paths.dashboard.overview} element={<Overview />} />

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
