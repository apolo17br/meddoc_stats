import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { ChakraProvider } from '@chakra-ui/react';
import '../../styles/global.css';
import './Header'
import theme from "../../theme";

export default function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* Não Autenticado */}
        {!isAuthenticated && <Routes />}

        {/* Autenticado */}
        {isAuthenticated && <Routes />}
      </ChakraProvider>
    </BrowserRouter>
  )
}

