import Card from "./Card/index";
import Container from "../Container";
import styles from "./blog.module.scss";
import Snap from "../../public/assets/images/snapchat.svg";
import Global from "../../public/assets/images/global.svg";
import Join from "../../public/assets/images/join.svg";

const Blog: React.FC = () => {
  return (
    <Container>
      <section className={styles.section}>
        <div className={styles["section__heading"]}>
          <h4 className={styles["section__heading-title"]}>Our recent blog</h4>
          <p className={styles["seection__heading-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>

        <div className={styles["section__blog-cards"]}>
          <Card
            image={Snap}
            title="The Snap Pixel: How It Works and How to Install"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
            link="/blog"
          />
          <Card
            image={Global}
            title="Global Partner Solutions: A Partnership of Innovation"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
            link="/blog"
          />
          <Card
            image={Join}
            title="2021: An opportunity for Snapchatters to start fresh"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim."
            link="/blog"
          />
        </div>
      </section>
    </Container>
  );
};

export default Blog;
