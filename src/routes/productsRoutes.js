import { lazy } from "react";
import IconComponent from "../containers/IconComponent/IconComponent";

export const productsRoutes = [
  {
    name: "ProductDetails",
    path: "/:category/:productID",
    category: '',
    component: lazy(() => import("../Components/productDeteils/ProductItemDetails")),
    exact: false,
    isLink: false,
  },
  {
    name: "iPhones",
    path: "/phones",
    category: 'phones',
    component: lazy(() => import("../Components/products/newProduct/newProduct")),
    exact: true,
    isLink: true,
    icon: <IconComponent />,
  },
  {
    name: "Mac",
    path: "/laptops",
    category: 'laptops',
    component: lazy(() => import("../Components/products/newProduct/newProduct")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-computer-desktop" />,
  },
  {
    name: "iPad",
    path: "/ipad",
    category: 'ipad',
    component: lazy(() => import("../Components/products/newProduct/newProduct")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-tablet" />,
  },
  {
    name: "AppleWatch",
    path: "/watch",
    category: 'watch',
    component: lazy(() => import("../Components/products/newProduct/newProduct")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-watch" />,
  },
  {
    name: "AirPods",
    path: "/pods",
    category: 'pods',
    component: lazy(() => import("../Components/products/newProduct/newProduct")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-headphones" />,
  },
];
