import { NextComponentType } from "next";

import styles from "./about.module.scss";
import Phone from "../../public/assets/images/handphone.svg";
import Image from "next/image";

const About: NextComponentType = () => {
  return (
    <section className={styles.about}>
      <div className={styles["about__heading"]}>
        <h4>About our App</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>

      <div className={styles["about__content"]}>
        <div>
          <Image src={Phone} alt="A Hand holding a Phone" />
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default About;
