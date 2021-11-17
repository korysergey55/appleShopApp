import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { IpadUl } from './IpadListStyled';
import IpadListItem from './ipadList/IpadListItem'
import { getAllAdvByCategoryApi } from "../../../services/api";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIpads } from "../../../redux/products/productsActions";
// import { getIpadsSelector, } from "../../../redux/products/productsSelectors";
import { getProductsFilterSelector } from "../../../redux/filter/filterSelectors";

const IpadList = () => {
  const dispatch = useDispatch();
  const ipads = useSelector((state) =>
    getProductsFilterSelector(state, "ipads")
  );
  useEffect(() => {
    const getIpads = async () => {
      const response = await getAllAdvByCategoryApi("ipad");
      if (response) {
        const ipadsList = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
        dispatch(setIpads(ipadsList));
      }
    };
    getIpads();
  }, [dispatch]);

  return (
    <IpadUl>
      {ipads?.map((ipad) => (
        <IpadListItem ipad={ipad} key={uuidv4()} />
      ))}
    </IpadUl>
  );
};

export default IpadList;
