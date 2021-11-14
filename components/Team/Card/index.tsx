import styles from './card.module.scss'
import Facebook from "../../../public/assets/icons/facebook.svg";
import Instagram from "../../../public/assets/icons/instagram.svg";
import Twitter from "../../../public/assets/icons/twitter.svg";
import Youtube from "../../../public/assets/icons/youtube.svg";
import Image from "next/image";

interface CardProps{
 name: string,
 role: string,
 desc: string,
 image: HTMLImageElement
}

const Card: React.FC<CardProps> = ({name, role, desc,image}) => {

  return (
    <div className={styles.card}>
      <div className={styles["card__pics"]}>
        <Image src={image} alt="A woman" />
      </div>
      <h4 className={styles["card__name"]}>{name}</h4>
      <h6 className={styles["card__role"]}>{role}</h6>
      <p className={styles["card__desc"]}>
       {desc}
      </p>

      <div className={styles["card__social"]}>
        <div>
          <Image src={Facebook} alt="a facebook icon" />
        </div>
        <div>
          <Image src={Instagram} alt="a instagram icon" />
        </div>
        <div>
          <Image src={Twitter} alt="a twitter icon" />
        </div>
        <div>
          <Image src={Youtube} alt="a youtube icon" />
        </div>
      </div>
    </div>
  );
}

export default Card