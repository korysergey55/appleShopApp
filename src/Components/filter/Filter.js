import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filter/filterActions";
import { filterSelector } from "../../redux/filter/filterSelectors";

import styles from "./styles.module.scss";

const Filter = () => {

  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onHandleChange = (event) => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <section className={styles.filter}>
      <div className={styles.container}>
        <label className={styles.label}>
          Find Goods
          <input
            className={styles.input}
            type="text"
            value={filter}
            onChange={onHandleChange}
            placeholder="Enter product..."
          />
        </label>
      </div>
    </section>
  );
};

export default Filter;
