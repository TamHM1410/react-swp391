export const paths = {
  root: "/",
  dashboard: {
    root: "/dashboard",
    overview: "/dashboard/overview",
    analytic: "/dashboard/analytic",
    account: "/dashboard/account",
    product: "/dashboard/product",
    user:'/dashboard/user'

  },
  product: {
    root: "/products",
    product_detail: "/products/:id",
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
