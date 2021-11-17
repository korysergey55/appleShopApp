import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdvByCategoryApi } from "../../../services/api";
import { v4 as uuidv4 } from 'uuid';
import AirPodsListItem from './airPodsListItem/AirPodsListItem.js';

import { ulStyled } from './styled';

import { setAirPods } from "../../../redux/products/productsActions";
import { getProductsFilterSelector } from "../../../redux/filter/filterSelectors";
import { getAirPodsSelector } from "../../../redux/products/productsSelectors";

const AirPodsList = () => {
  const dispatch = useDispatch();
  const airPods = useSelector(getAirPodsSelector);
  useEffect(() => {
    const getAirPods = async () => {
      const response = await getAllAdvByCategoryApi("airPods");
      if (response) {
        const airPodsList = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
        dispatch(setAirPods(airPodsList));
      }
    };
    getAirPods();
  }, [dispatch]);

  return (
    <ulStyled>
      {airPods?.map((airPod) => (
        <AirPodsListItem airPod={airPod} key={uuidv4()} />
      ))}
    </ulStyled>
  );
};

export default AirPodsList;
