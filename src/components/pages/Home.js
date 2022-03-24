import styles from "./Home.module.css";
import savings from "../../img/savings.svg";
import LinkButton from "../layout/LinkButton";
import { Animated } from "react-animated-css";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1 className={styles.animated_copy_right}>
        Bem-Vindo ao
        <Animated animationIn="tada">
          <span className={styles.copy_right}>Costs</span>
        </Animated>
      </h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton pag="./novo-projeto" text="Criar Projeto" />
      <Animated animationIn=" bounceInLeft ">
        <img src={savings} alt="Cofre" />
      </Animated>
    </section>
  );
}

export default Home;
