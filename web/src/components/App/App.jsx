import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { ChakraProvider } from '@chakra-ui/react'

export default function App() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <ChakraProvider>
        {/* Não Autenticado */}
        {!isAuthenticated && <Routes />}

        {/* Autenticado */}
        {isAuthenticated && <Routes />}
      </ChakraProvider>
    </BrowserRouter>
  )
}

