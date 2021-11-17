import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filterActions";
import { filterSelector } from "../../redux/filter/filterSelectors";

import styles from "./styles.module.scss";

const Filter = () => {

 const filter = useSelector(filterSelector);
 const dispatch = useDispatch();

 const onHandleChange = (event) => {
  const felterInputValue = event.target.value;
  dispatch(setFilter(felterInputValue));
 };
 
 return (
  <label className={styles.filterLabel}>
   Find Product
   <input
    className={styles.filterInput}
    type="text"
    value={filter}
    onChange={onHandleChange}
    placeholder="Enter somsing heare"
   />
  </label>
 );
};

export default Filter;
