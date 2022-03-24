import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Contato from "./components/pages/Contato";
import Empresa from "./components/pages/Empresa";
import Home from "./components/pages/Home";
import NovoProjeto from "./components/pages/NovoProjeto";
import Project from "./components/pages/Project";
import Projetos from "./components/pages/Projetos";

function App() {
  return (
    <Router>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/novo-projeto" element={<NovoProjeto />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
