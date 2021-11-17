import { lazy } from "react";
import IconComponent from "../containers/IconComponent/IconComponent";

export const productsRoutes = [
  {
    name: "ProductDetails",
    path: "/:category/:productID",
    component: lazy(() => import("../Components/productDeteils/ProductItemDetails")),
    exact: false,
    isLink: false,
  },
  {
    name: "iPhones",
    path: "/phones",
    component: lazy(() => import("../Components/products/phoneList/PhoneList")),
    exact: true,
    isLink: true,
    icon: <IconComponent />,
  },
  {
    name: "Mac",
    path: "/laptops",
    component: lazy(() => import("../Components/products/laptopList/LaptopList")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-computer-desktop" />,
  },
  {
    name: "iPad",
    path: "/ipad",
    component: lazy(() => import("../Components/products/ipad/IpadList")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-tablet" />,
  },
  {
    name: "AppleWatch",
    path: "/watch",
    component: lazy(() => import("../Components/products/watch/AppleWatchList")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-watch" />,
  },
  {
    name: "AirPods",
    path: "/pods",
    component: lazy(() => import("../Components/products/airPods/AirPodsList.js")),
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-headphones" />,
  },
];
