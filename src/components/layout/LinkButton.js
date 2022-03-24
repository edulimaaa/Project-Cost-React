import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

function LinkButton({ pag, text }) {
  return (
    <Link className={styles.btn} to={pag}>
      {text}
    </Link>
  );
}

export default LinkButton;
