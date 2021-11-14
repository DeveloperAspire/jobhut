import styles from "./interface.module.scss";
import Container from "../Container";
import Carousel from "./Carousel";
import Google from "../../public/assets/images/google.svg";
import Apple from "../../public/assets/images/apple.svg";
import Image from "next/image";
import Download from "../../public/assets/icons/download.svg";
import Thumbs from "../../public/assets/icons/thumbs.svg";
import Star from "../../public/assets/icons/star.svg";

const Interface: React.FC = () => {
  return (
    <Container>
      <section className={styles.interface}>
        <div className={styles["interface__heading"]}>
          <h4 className={styles["interface__heading-title"]}>
            Checkout Our App Interface Look
          </h4>
          <p className={styles["interface__heading-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <Carousel />
        <div className={styles["interface__action"]}>
          <h5 className={styles["interface__action-title"]}>
            Download app Now
          </h5>
          <p className={styles["interface__action-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
          <div className={styles["interface__button"]}>
            <Image src={Google} alt="Logo of Jobhut" />
            <Image src={Apple} alt="Logo of Jobhut" />
          </div>
        </div>

        <div className={styles["interface__feedback"]}>
          <div className={styles["interface__feedback-card"]}>
            <Image src={Download} alt="a download icon" />
            <p className={styles["interface__feedback-card-number"]}>59865</p>
            <p className={styles["interface__feedback-card-name"]}>Downloads</p>
          </div>

          <div className={styles["interface__feedback-card"]}>
            <Image src={Thumbs} alt="a download icon" />
            <p className={styles["interface__feedback-card-number"]}>29852</p>
            <p className={styles["interface__feedback-card-name"]}>Likes</p>
          </div>

          <div className={styles["interface__feedback-card"]}>
            <Image src={Star} alt="a download icon" />
            <p className={styles["interface__feedback-card-number"]}>1500</p>
            <p className={styles["interface__feedback-card-name"]}>
              Star Rating
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Interface;
