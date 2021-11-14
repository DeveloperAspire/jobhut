import Snap from '../../../public/assets/images/snapchat.svg'
import styles from './card.module.scss'
import Image from 'next/image'
const Card = () => {

      return (
        <div className={styles.card}>
          <div className={styles["card__img"]}>
            <Image src={Snap} alt="A blog cover photo showing snap chat" />
          </div>
          <div className={styles["card__content"]}>
            <h6 className={styles["card__content-title"]}>
              The Snap Pixel: How It Works and How to Install
            </h6>
            <p className={styles["card__content-desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <a className={styles["card__content-link"]} href="/blog">
              Read More
            </a>
          </div>
        </div>
      );
}

export default Card