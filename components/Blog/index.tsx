import Card from "./Card/index"
import Container from "../Container"
import styles from './blog.module.scss'

const Blog = () => {

      return (
        <Container>
          <section className={styles.section}>
            <div className={styles["section__heading"]}>
              <h4 className={styles["section__heading-title"]}>
                Our recent blog
              </h4>
              <p className={styles["seection__heading-desc"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>

            <Card />
          </section>
        </Container>
      );
}

export default Blog