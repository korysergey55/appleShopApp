import { lazy } from "react";
import IconComponent from "../containers/IconComponent/IconComponent";

export const mainRoutes = [
  {
    name: "Home",
    path: "/",
    component: lazy(() => import("../pages/homePage/HomePage")),
    exact: true,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: "Products",
    path: "/products",
    component: lazy(() => import("../pages/productsPage/ProductsPage.js")),
    exact: false,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: "Service",
    path: "/service",
    component: lazy(() => import("../pages/servisePage/ServicePage.js")),
    exact: false,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: "Contacts",
    path: "/contacts",
    component: lazy(() => import('../pages/contactsPage/contactsPage')),
    exact: false,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: <IconComponent icon="#icon-shopping-cart" color={true} />,
    path: "/cart",
    component: lazy(() => import("../pages/cartPage/CartPage")),
    exact: true,
    isRestricted: false,
    isPrivate: false,
    cartLength: null,
    cart: true,
  },

  {
    name: '',
    path: "/order",
    component: lazy(() => import("../pages/orderPage/OrderPage")),
    exact: true,
    isRestricted: false,
    isPrivate: false,
    cartLength: null,
  },
  {
    name: "Administration",
    path: "/admin",
    component: lazy(() => import("../pages/adminPage/AdminPage.js")),
    exact: true,
    isRestricted: false,
    isPrivate: true,
  },
  {
    name: "Login",
    path: "/login",
    component: lazy(() => import("../pages/auth/loginPage/LoginPage.js")),
    exact: true,
    isRestricted: true,
    isPrivate: false,
  },
  {
    name: "",
    path: "/reset",
    component: lazy(() => import('../pages/auth/resetPage/ResetPage')),
    exact: true,
    isRestricted: false,
    isPrivate: false,
  },
  {
    name: "",
    path: "/:notfound",
    exact: true,
    component: lazy(() => import("../containers/notFoundComponent/NotFoundComponent.js")),
    isPrivate: false,
    iisRestricted: false,
  },
];


