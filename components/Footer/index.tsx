import styles from "./footer.module.scss";
import facebook from "../../public/assets/icon-alt/FB.svg";
import twitter from "../../public/assets/icon-alt/TWIT.svg";
import youtube from "../../public/assets/icon-alt/YOU.svg";
import instagram from "../../public/assets/icon-alt/INSTA.svg";
import Send from '../../public/assets/icons/send.svg'
import Copy from '../../public/assets/icons/copy.svg'
import Image from "next/image";

import Container from "../Container";
const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.container}>
          <div className={styles["container-grid"]}>
            <div className={styles["container__info"]}>
              <h4 className={styles["container__info-logo"]}>Logo</h4>
              <p className={styles["container__info-desc"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
              </p>

              <div className={styles["container__info-social"]}>
                <div>
                  <Image src={facebook} alt="facebook icon" />
                </div>
                <div>
                  <Image src={instagram} alt="instagram icon" />
                </div>
                <div>
                  <Image src={twitter} alt="twitter icon" />
                </div>
                <div>
                  <Image src={youtube} alt="youtibe icon" />
                </div>
              </div>
            </div>

            <div className={styles["container__info-link"]}>
              <h5 className={styles["container__info-link-title"]}>
                Quick Link
              </h5>
              <a href="/about"> About</a>
              <a href="/feature">Features</a>
              <a href="/screenshot">Screenshot</a>
              <a href="/blog">Blog</a>
            </div>
          </div>

          <div className={styles["container__news"]}>
            <h5 className={styles["container__news-title"]}>news letter</h5>
            <p className={styles["container__news-desc"]}>
              Subscribe our newsletter to get our latest update & news
            </p>
            <form className={styles["container__news-form"]}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <button
                type="submit"
                aria-label="submit"
                className={styles["container__news-form__button"]}
              >
                <Image src={Send} alt="send message icon" />
              </button>
            </form>
          </div>
        </div>

        <div className={styles.copy}>
          <Image src={Copy} alt="a Copy right logo" />
          <p>Copyright 2021 .JobHut. All Right Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
