import Snap from "../../../public/assets/images/snapchat.svg";
import styles from "./card.module.scss";
import Image from "next/image";

interface CardProps {
  image: HTMLImageElement;
  title: string;
  link: string;
  desc: string;
}
const Card: React.FC<CardProps> = ({ image, title, link, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__img"]}>
        <Image src={image} alt="A blog cover photo showing snap chat" />
      </div>
      <div className={styles["card__content"]}>
        <h6 className={styles["card__content-title"]}>{title}</h6>
        <p className={styles["card__content-desc"]}>{desc}</p>
        <a className={styles["card__content-link"]} href={link}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
