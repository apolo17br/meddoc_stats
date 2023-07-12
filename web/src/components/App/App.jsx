import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes/Routes";

export default function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      {/* Não Autenticado */}
      {!isAuthenticated && <Routes />}

      {/* Autenticado */}
      {isAuthenticated && <Routes />}
    </BrowserRouter>
  )
}

