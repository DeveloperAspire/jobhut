import { NextComponentType } from "next";
import styles from "./container.module.scss";

const Container: NextComponentType = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
