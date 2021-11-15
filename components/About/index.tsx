import styles from "./about.module.scss";
import Phone from "../../public/assets/images/handphone.svg";
import Image from "next/image";
import Card from "./Card";

import ScrollAnimation from "react-animate-on-scroll";


const About: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles["about__heading"]}>
        <h4 className={styles["about__heading-title"]}>About our App</h4>
        <p className={styles["about__heading-desc"]}>
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

        <div className={styles["about__content-container"]}>
          <ScrollAnimation animateIn="fadeInUp" duration={1}>
            <Card
              title="Creative Design"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={2}>
            <Card
              title="Easy to use"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
            />
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" duration={1} delay={2}>
            <Card
              title="Best user experience"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit."
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
