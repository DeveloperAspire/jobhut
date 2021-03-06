import styles from "./customers.module.scss";
import Carousel from "./Carousel";

import ScrollAnimation from "react-animate-on-scroll";

const Customers: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles["section__heading"]}>
        <h4 className={styles["section__heading-title"]}>
          Our Happy Customers
        </h4>
        <p className={styles["seection__heading-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>

      <ScrollAnimation animateIn="fadeInLeft" duration={2}>
        <Carousel />
      </ScrollAnimation>
    </section>
  );
};

export default Customers;
