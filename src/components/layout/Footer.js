import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/edulimaaa" target='_blank' rel="noreferrer"><BsGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/eduardo-pereira-de-lima-aab8b1168/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        </li>
        
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
