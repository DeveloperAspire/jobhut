import { NextComponentType } from "next";
import styles from "./navbar.module.scss";
import Logo from '../../public/assets/images/logo.svg'
import Image from "next/image";

const Navbar: NextComponentType = () => {
  return (
    <header className={styles.header}>
      <Image
        src={Logo}
        alt="Logo of Jobhut"
        width={100}
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <nav className={styles['header__navbar']}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Screenshot</li>
          <li>Blog</li>
          <button type="button" aria-label="download"> Download</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
