import styles from "./info.module.scss";
import Demo from "../../public/assets/images/preview.svg";
import Image from "next/image";

const Info: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles["section__heading"]}>
        <h4 className={styles["section__heading-title"]}>
          how to use the app perfectly
        </h4>
        <p className={styles["seection__heading-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>

      <div className={styles["section__demo"]}>
        <Image src={Demo} alt="Preview demo of the application" />
      </div>
    </section>
  );
};

export default Info;
