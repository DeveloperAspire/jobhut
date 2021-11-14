import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
import Container from "../../Container";
import styles from "./carousel.module.scss";
import Ann from "../../../public/assets/images/ann.svg";
import Henry from "../../../public/assets/images/henry.svg";
import Lucy from "../../../public/assets/images/raphael.svg";
const Carousel = () => {
  return (
    <Container>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        slidesPerView={1}
        pagination
      >
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles["card__pics"]}>
              <Image src={Ann} alt="A woman" />
            </div>
            <h4 className={styles["card__name"]}>Ann Lubin</h4>
            <h6 className={styles["card__role"]}>HR - MTN NIGERIA</h6>
            <p className={styles["card__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles["card__pics"]}>
              <Image src={Henry} alt="A woman" />
            </div>
            <h4 className={styles["card__name"]}>Jake BradFord</h4>
            <h6 className={styles["card__role"]}>HR - TELECOM NIGERIA</h6>
            <p className={styles["card__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles["card__pics"]}>
              <Image src={Lucy} alt="A woman" />
            </div>
            <h4 className={styles["card__name"]}>Lucy Okafor</h4>
            <h6 className={styles["card__role"]}>CEO - Edibles</h6>
            <p className={styles["card__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Carousel;
