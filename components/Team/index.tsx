import styles from "./team.module.scss";
import Container from "../Container";
import One from '../../public/assets/images/luzzy.svg'
import Two from '../../public/assets/images/henry.svg'
import Three from '../../public/assets/images/raphael.svg'
import Facebook from '../../public/assets/icons/facebook.svg'
import Instagram from '../../public/assets/icons/instagram.svg'
import Twitter from '../../public/assets/icons/twitter.svg'
import Youtube from '../../public/assets/icons/youtube.svg'
import Image from 'next/image'

const Team: React.FC = () => {
  return (
    <Container>
      <section className={styles.team}>
        <div className={styles["team__heading"]}>
          <h4 className={styles["team__heading-title"]}>Our Creative team</h4>
          <p className={styles["team__heading-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>

        <div className={styles["team__cards"]}>
          <div className={styles["team__cards-card"]}>
            <div className={styles["team__cards-pics"]}>
              <Image src={One} alt="A woman" />
            </div>
            <h4 className={styles["team__cards-card__name"]}>LUIZZY LUIZZY</h4>
            <h6 className={styles["team__cards-card__role"]}>
              PROJECT MANAGER
            </h6>
            <p className={styles["team__cards-card__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>

            <div className={styles["team__cards-card__social"]}>
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

          <div className={styles["team__cards-card"]}>
            <div>
              <Image src={Three} alt="A woman" />
            </div>
            <h4 className={styles["team__cards-card__name"]}>HENRY KAKA</h4>
            <h6 className={styles["team__cards-card__role"]}>FOUNDER/CEO</h6>
            <p className={styles["team__cards-card__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>

            <div className={styles["team__cards-card__social"]}>
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

          <div className={styles["team__cards-card"]}>
            <div>
              <Image src={Two} alt="A woman" />
            </div>
            <h4 className={styles["team__cards-card__name"]}>
              RAPHAEL RAPHAEL
            </h4>
            <h6 className={styles["team__cards-card__role"]}>LEAD DEVELOPER</h6>
            <p className={styles["team__cards-card__desc"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>

            <div className={styles["team__cards-card__social"]}>
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
        </div>
      </section>
    </Container>
  );
};

export default Team;
