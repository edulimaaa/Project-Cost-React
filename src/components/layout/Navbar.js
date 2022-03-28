import { Link } from "react-router-dom";
import Container from "./Container";
import logo from "../../img/costs_logo.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li>
            <Link className={styles.btn_grad} to="/">
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.btn_grad} to="/projetos">
              Projetos
            </Link>
          </li>

          <li className={styles.item}>
            <Link className={styles.btn_grad} to="/contato">
              Contato
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
