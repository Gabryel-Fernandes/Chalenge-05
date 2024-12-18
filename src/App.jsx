import GlobalStyle from "./style/GlobalStyles";
import { AppRoutes } from "./pages/Routes";
import { ThemeProvider } from "./context/ThemeContext";
import { ThemeToggle } from "./components/folder-/ThemeTogglerButton";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Importando Router

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term); // Atualiza o termo de busca
  };

  return (
    <>
      <Router>
        <ThemeProvider>
          <GlobalStyle />
          <ThemeToggle onSearch={handleSearch} />  {/* Passando a função de busca para o ThemeToggle */}
          <AppRoutes searchTerm={searchTerm} />  {/* Passando o termo de busca para as rotas */}
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
