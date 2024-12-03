export const paths = {
  root: "/",
  dashboard: {
    root: "/dashboard",
    overview: "overview",
    analytic: "analytic",
    account: "account",
    product: "product",
    user: "user",
    courses: "courses",
    product_detail: "/:id",
    addnew_product: "product/addnew",
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
