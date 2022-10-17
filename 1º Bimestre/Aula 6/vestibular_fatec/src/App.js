import './App.css';
import logo from './logo-governo-estado-de-sao-paulo-footer-2.png';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <p>Venha fazer o vestibular FATEC 2022/2</p>
      <p>Os curso oferecidos são:</p>
      <ul className="cursos">
        <li>Agronegócio - Noite - 40 vagas</li>
        <li>Análise e Desenvolvimento de Sistemas - Manhã - 40 vagas / Noite - 40 vagas</li>
        <li>Eventos - Noite - 40 vagas</li>
        <li>Gestão Empresarial - Noite - 40 vagas / EaD - 20 vagas</li>
        <li>Marketing - Manhã - 40 vagas</li>
        <li>Produção Agropecuária - Manhã - 40 vagas</li>
      </ul>
      <div className="unidade">
        <h1>Fatec Presidente Prudente</h1>
        <p>R. Teresina, 75 - Vila Paulo Roberto</p>
        <p>CEP 19046-230 - Presidente Prudente/SP</p>
        <p>Telefone: (18) 3916-7887</p>
        <p>E-mail: <a href="mailto:f157dir@cps.sp.gov.br">f157dir@cps.sp.gov.br</a></p>
        <p>Site: <a href="www.fatecpp.edu.br">www.fatecpp.edu.br</a></p>
      </div>
    </div>
  );
}

export default App;
