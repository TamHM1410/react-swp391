export const paths = {
  root: "/",
  dashboard: {
    root: "/dashboard",
    overview: "/dashboard/overview",
    analytic: "/dashboard/analytic",
    account: "/dashboard/account",
    product: "/dashboard/product",
    user: "/dashboard/user",
    courses: "/dashboard/courses",
    courses_create: "/dashboard/courses/create",
    category: "/dashboard/category",
    create_category: "/dashboard/category/create",
    courses_detail: "/dashboard/course/:id",



    shipping: "/dashboard/shipping",
    order_history:'/dashboard/order_history',


    transaction: "/dashboard/transaction",
    transaction_detail: "/dashboard/transaction/:id",


    product_detail: "/dashboard/product/:id",
    addnew_product: "/dashboard/product/addnew",
  },
  product: {
    root: "/products",
    product_detail: "/:id",
  },
  cart: {
    root: "/cart",
  },
  checkout: {
    root: "/checkout",
  },
  auth: {
    login: "/auth/login",
    register: "/auth/register",
  },
};
