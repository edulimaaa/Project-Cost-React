import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Message from "../layout/Message";
import styles from "./Projetos.module.css";
import Loading from "../layout/Loading";
import No_Project from "../../img/no_project.png";

function Projetos() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projecMessage, setProjectMessage] = useState("");

  const location = useLocation(); //useLocation para puxar o state.message do history em Projetos.js
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton pag="../novo-projeto" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      {projecMessage && <Message type="success" msg={projecMessage} />}
      {/*Se tiver "message" mostra a mensagem tipo success  */}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={
                project.name[0].toUpperCase() +
                project.name.slice(1).toLowerCase()
              }
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <>
            <p>Não há projetos cadastrados!</p>
            <div className={styles.no_project}>
              <img src={No_Project} alt="no project" />
            </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default Projetos;
