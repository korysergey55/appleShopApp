import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { LaptopUl } from "./LaptopListStyled";
import LaptopListItem from "./laptopListItem/LaptopListItem";
import { getAllAdvByCategoryApi } from "../../../services/api";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLaptops } from "../../../redux/products/productsActions";
import { getProductsFilterSelector } from "../../../redux/filter/filterSelectors";

const LaptopList = () => {
 const dispatch = useDispatch();
 const laptops = useSelector((state) =>
  getProductsFilterSelector(state, "laptops")
 );
 useEffect(() => {
  const getLaptops = async () => {
   const response = await getAllAdvByCategoryApi("laptops");
   if (response) {
    const laptopsList = Object.keys(response).map((key) => ({
     id: key,
     ...response[key],
    }));
    dispatch(setLaptops(laptopsList));
   }
  };
  getLaptops();
 }, [dispatch]);

 return (
  <LaptopUl>
   {laptops?.map((laptop) => (
     <LaptopListItem laptop={laptop} key={uuidv4()} />
   ))}
  </LaptopUl>
 );
};

export default LaptopList;
