import styles from "./mobile.module.scss";

const Mobile: React.FC = () => {
  return (
    <div className={styles["menu-wrap"]}>
      <input type="checkbox" className={styles["toggler"]} />
      <div className={styles["hamburger"]}>
        <div></div>
      </div>
      <div className={styles["menu"]}>
        <div>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Features</li>
              <li>Screenshot</li>
              <li>Blog</li>
              <button
                type="button"
                aria-label="download"
                className={styles["button"]}
              >
                Download
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
