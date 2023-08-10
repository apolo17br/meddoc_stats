import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { ChakraProvider } from '@chakra-ui/react';
import '../../styles/global.css';
import HeaderComponent from './HeaderComponent.jsx'
import theme from "../../theme";
import { AuthenticatedLayout } from "../Layout/AuthenticatedLayout";

export default function App({ Component }) {
  const isAuthenticated = true;

  return (<>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* Não Autenticado */}
        {!isAuthenticated && <Routes />}
        <HeaderComponent/>
        <Component {...HeaderComponent}/>
        {/* Autenticado */}
        {isAuthenticated && (
          <AuthenticatedLayout>
            <Routes />
          </AuthenticatedLayout>
        )}
      </ChakraProvider>
    </BrowserRouter>
  </>
  )
}

