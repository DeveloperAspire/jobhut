import { NextComponentType } from "next";
import Success from "../../../public/assets/icons/success.svg";
import Image from "next/image";
// import Icon from '../../utils/Icon/index'
import styles from "./card.module.scss";

interface CardProps {
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__icon"]}>
        <Image src={Success} alt="succes icon" />
      </div>

      <div className={styles["card__content"]}>
        <h6 className={styles["card__content-title"]}>{title}</h6>
        <p className={styles["card__content-desc"]}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
