import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { ChakraProvider } from '@chakra-ui/react';
import '../../styles/global.css';
import theme from "../../theme";
import { AuthenticatedLayout } from "../Layout/AuthenticatedLayout";
/*import { HeaderComponent } from "../../components/HeaderComponent/Header";*/

export default function App() {
  const isAuthenticated = true;

  return (<>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* Não Autenticado */}
        {!isAuthenticated && <Routes />}
        {/* Autenticado */}
        {isAuthenticated && <Routes />}
        {/*{isAuthenticated && (
          <AuthenticatedLayout>
            <Routes />
          </AuthenticatedLayout>
        )}*/}
      </ChakraProvider>
    </BrowserRouter>
  </>
  )
}

