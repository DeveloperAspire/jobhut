import styles from "./navbar.module.scss";
import Logo from "../../public/assets/images/logo.svg";
import Image from "next/image";
import Container from "../Container";

const Navbar: React.FC= () => {
  return (
    <Container>
      <header className={styles.header}>
        <Image src={Logo} alt="Logo of Jobhut" width={100} />
        <nav className={styles["header__navbar"]}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Screenshot</li>
            <li>Blog</li>
            <button type="button" aria-label="download">
              Download
            </button>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

export default Navbar;
