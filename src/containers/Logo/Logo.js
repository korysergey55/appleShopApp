import React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as Icon } from "../../sourses/icons/logo.svg";

const Logo = () => {
 return <Icon className={styles.logo} />;
};

export default Logo;
