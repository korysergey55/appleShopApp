import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { AppleWatchUl } from './styled';
import AppleWatchListItem from "./appleWatchListItem/AppleWatchListItem";
import { getAllAdvByCategoryApi } from "../../../services/api";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppleWatches } from "../../../redux/products/productsActions";
// import { getProductsFilterSelector } from "../../redux/filter/filterSelectors";
import { getAppleWatchesSelector } from "../../../redux/products/productsSelectors";

const AppleWatchList = () => {
  const dispatch = useDispatch();
  const appleWatch = useSelector(getAppleWatchesSelector);

  useEffect(() => {
    const getWatches = async () => {
      const response = await getAllAdvByCategoryApi("appleWatch");
      if (response) {
        const watchList = Object.keys(response).map((key) => ({
          id: key,
          ...response[key],
        }));
        dispatch(setAppleWatches(watchList));
      }
    };
    getWatches();
  }, [dispatch]);

  return (
    <AppleWatchUl>
      {appleWatch?.map((watch) => (
        <AppleWatchListItem watch={watch} key={uuidv4()} />
      ))}
    </AppleWatchUl>
  );
};

export default AppleWatchList;

