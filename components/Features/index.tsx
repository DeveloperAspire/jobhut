import Container from "../Container";
import styles from "./features.module.scss";
import Chat from "../../public/assets/icons/chat.svg";
import Image from "next/image";
import Phone from "../../public/assets/images/phone.svg"
import phone from '../../public/assets/icons/phone.svg'

const Feature: React.FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.feature}>
          <div className={styles["feature__heading"]}>
            <h4 className={styles["feature__heading-title"]}>App features</h4>
            <p className={styles["feature__heading-desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>

          <div className={styles["feature__content"]}>
            <div className={styles["feature__content-card"]}>
              <Image src={Chat} alt="a chat Icon" />
              <h5 className={styles["feature__content-card-title"]}>
                Full free chat
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            {/* Grid Box */}
            <div className={styles["feature__content-grid"]}>
              <div className={styles["feature__content-grid-content"]}>
                <div
                  className={`${styles["feature__content-card"]} ${styles["feature__right"]}`}
                >
                  <Image src={Chat} alt="a chat Icon" />
                  <h5 className={styles["feature__content-card-title"]}>
                    unlimiter features
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div
                  className={`${styles["feature__content-card"]} ${styles["feature__right"]}`}
                >
                  <Image src={Chat} alt="a chat Icon" />
                  <h5 className={styles["feature__content-card-title"]}>
                    awsome ui design
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>

              <Image src={Phone} alt="An Illustration of a Phone" />

              {/* Fourth box */}

              <div className={styles["feature__content-grid-content"]}>
                <div
                  className={`${styles["feature__content-card"]} ${styles["feature__left"]}`}
                >
                  <Image src={phone} alt="a chat Icon" />
                  <h5 className={styles["feature__content-card-title"]}>
                    iso & androind version
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                <div
                  className={`${styles["feature__content-card"]} ${styles["feature__left"]}`}
                >
                  <Image src={Chat} alt="a chat Icon" />
                  <h5 className={styles["feature__content-card-title"]}>
                    retina ready greaphics
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["feature__content-card"]}>
              <Image src={Chat} alt="a chat Icon" />
              <h5 className={styles["feature__content-card-title"]}>
                24/7 support by real pepole
              </h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Feature;
