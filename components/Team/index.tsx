import styles from "./team.module.scss";
import Container from "../Container";
import One from "../../public/assets/images/luzzy.svg";
import Two from "../../public/assets/images/henry.svg";
import Three from "../../public/assets/images/raphael.svg";
import Card from "./Card";

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
          <Card
            name="LUIZZY LUIZZY"
            role=" PROJECT MANAGER"
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae."
            image={One}
          />
          <Card
            name="HENRY KAKA"
            role=" FOUNDER/CEO"
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae."
            image={Two}
          />
          <Card
            name="RAPHAEL RAPHAEL"
            role="LEAD DEVELOPER"
            desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae."
            image={Three}
          />
        </div>
      </section>
    </Container>
  );
};

export default Team;
