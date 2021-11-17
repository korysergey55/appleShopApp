import React from "react";
import styles from "./LogoStyled.module.css";
import { ReactComponent as Icon } from "../../sourses/icons/logo.svg";

const Logo = () => {
 return <Icon className={styles.logo} />;
};

export default Logo;
