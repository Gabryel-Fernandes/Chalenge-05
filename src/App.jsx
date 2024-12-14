import GlobalStyle from "./style/GlobalStyles";
import { AppRoutes } from "./pages/Routes";
import { ThemeProvider } from "./context/ThemeContext"
import { ThemeToggle } from "./components/folder-/ThemeTogglerButton";
function App() {
  return (

    <>
        <ThemeProvider>
          <GlobalStyle />
          <ThemeToggle />
          <AppRoutes />
        </ThemeProvider>
    </>
  )
}

export default App