import Image from "next/image";
import HeroImg from "../../public/assets/images/herophone.svg";
import Google from "../../public/assets/images/google.svg";
import Apple from "../../public/assets/images/apple.svg";
import styles from "./hero.module.scss";
import Container from "../Container";

import ScrollAnimation  from "react-animate-on-scroll";


const Hero: React.FC = () => {
  return (
    <Container>
      <main className={styles.hero}>
        <div className={styles["hero__text-container"]}>
          <div className={styles["hero__text-container-child"]}>
            <div className={styles["hero__text-container-child__container"]}>
              <h2 className={styles["hero__text-container-child__heading"]}>
                CONNECT WITH THE RIGHT WORKFORCE
              </h2>
              <p className={styles["hero__text-container-child__text"]}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <h5 className={styles["hero__text-container-child__action"]}>
                Download app Now
              </h5>
              <div className={styles["hero__text-container-child__button"]}>
                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={2}>
                  <Image src={Google} alt="Logo of Jobhut" />
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" duration={1} delay={2}>
                  <Image src={Apple} alt="Logo of Jobhut" />
                </ScrollAnimation>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeIn" duration={2}>
          <div>
            <Image src={HeroImg} alt="Logo of Jobhut" />
          </div>
        </ScrollAnimation>
      </main>
    </Container>
  );
};

export default Hero;
