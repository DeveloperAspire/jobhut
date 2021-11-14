import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import phone from "../../../public/assets/images/iphone.svg";
import phoneDark from "../../../public/assets/images/iphone-dark.svg";
import phoneTwo from "../../../public/assets/images/iphone-2.svg";
import Image from "next/image";
// import { useRef } from "react";
import Container from "../../Container";

import "swiper/css/bundle";

import styles from "./carousel.module.scss";

const Carousel = () => {
  // const navigationPrevRef = useRef<HTMLDivElement>(null);
  // const navigationNextRef = useRef<HTMLDivElement>(null);
  return (
    <Container>
      <div className={styles.wrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          pagination
          //     navigation={{
          //       prevEl: navigationPrevRef.current,
          //       nextEl: navigationNextRef.current,
          //     }}
          autoplay={{
            delay: 2000,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.img}>
              <Image src={phone} alt="phone" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img}>
              <Image src={phoneDark} alt="phone" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img}>
              <Image src={phoneTwo} alt="phone" />
            </div>
          </SwiperSlide>
          {/* <div ref={navigationPrevRef}>Hello</div>
          <div ref={navigationNextRef}> hmm </div> */}
        </Swiper>
      </div>
    </Container>
  );
};

export default Carousel;
