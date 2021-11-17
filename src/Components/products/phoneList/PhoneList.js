import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { PhoneUl } from "./PhoneListStyled";
import PhoneListItem from "./phoneListItem/PhoneListItem";
import { getAllAdvByCategoryApi } from "../../../services/api";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPhones } from "../../../redux/products/productsActions";
import { getProductsFilterSelector } from "../../../redux/filter/filterSelectors";

const PhoneList = () => {
 const dispatch = useDispatch();
 const phones = useSelector((state) =>
  getProductsFilterSelector(state, "phones")
 );

 useEffect(() => {
  const getPhones = async () => {
   const response = await getAllAdvByCategoryApi("phones");
   if (response) {
    const phonesList = Object.keys(response).map((key) => ({
     id: key,
     ...response[key],
    }));
    dispatch(setPhones(phonesList));
   }
  };
  getPhones();
 }, [dispatch]);

 return (
   <PhoneUl>
   {phones?.map((phone) => (
     <PhoneListItem phone={phone} key={uuidv4()} />
   ))}
  </PhoneUl>
 );
};
export default PhoneList;
