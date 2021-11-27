// import { lazy } from "react";
import ProductItemDetails from "../Components/productDeteils/ProductItemDetails";
import IconComponent from "../containers/IconComponent/IconComponent";
import PhoneList from "../Components/products/phoneList/PhoneList";

import newProduct  from "../Components/products/newProduct/newProduct";
import LaptopList from "../Components/products/laptopList/LaptopList";

export const productsRoutes = [
  {
    name: "ProductDetails",
    path: "/:category/:productID",
    component: ProductItemDetails,
    exact: false,
    isLink: false,
  },
  {
    name: "iPhones",
    path: "/phones",
    component: newProduct,
    exact: true,
    isLink: true,
    icon: <IconComponent />,
  },
  {
    name: "Mac",
    path: "/laptops",
    component: LaptopList,
    exact: true,
    isLink: true,
    icon: <IconComponent icon="#icon-computer-desktop" />,
  },
  // {
  //   name: "iPad",
  //   path: "/ipad",
  //   component: lazy(() => import("../Components/products/ipad/IpadList")),
  //   exact: true,
  //   isLink: true,
  //   icon: <IconComponent icon="#icon-tablet" />,
  // },
  // {
  //   name: "AppleWatch",
  //   path: "/watch",
  //   component: lazy(() => import("../Components/products/watch/AppleWatchList")),
  //   exact: true,
  //   isLink: true,
  //   icon: <IconComponent icon="#icon-watch" />,
  // },
  // {
  //   name: "AirPods",
  //   path: "/pods",
  //   component: lazy(() => import("../Components/products/airPods/AirPodsList.js")),
  //   exact: true,
  //   isLink: true,
  //   icon: <IconComponent icon="#icon-headphones" />,
  // },
];
