import styles from "./container.module.scss";

const Container: React.FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
