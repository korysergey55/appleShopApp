import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterAction } from "../../redux/filter/filterActions";
import { filterSelector } from "../../redux/filter/filterSelectors";

import styles from "./styles.module.scss";

const Filter = () => {

  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const value = event.target.value;
    dispatch(setFilterAction(value));
  };

  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={onHandleChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default Filter;
