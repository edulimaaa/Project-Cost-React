import { BsWhatsapp } from "react-icons/bs";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.div}>
      <section className={styles.section1}>
        <h1>Contatos</h1>
        <h3>Eduardo Pereira de Lima</h3>
        <a href="tel:+5581984050565">
          <BsWhatsapp /> (81) 9 8405-0565
        </a>
      </section>

      <br></br>
      <br></br>

      <section>
        <h4>HISTÓRICO ACADÊMICO</h4>
        <p>Universidade Estácio de Sá</p>
        <p>Curso: Análise e Desenvolvimento de Sistemas</p>
        <p>Período: 1º</p>
      </section>

      <br></br>

      <section>
        <h4>Principais Competências</h4>
        <ul>
          <li>Lógica de Programação</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass / Scss</li>
        </ul>
      </section>
    </div>
  );
}

export default Contato;
