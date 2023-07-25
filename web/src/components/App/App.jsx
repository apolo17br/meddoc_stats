import { BrowserRouter } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { ChakraProvider } from '@chakra-ui/react';
import '../../styles/global.css';


import '../../theme/fonts.css';
import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        azulCanonico: {
            50: '#38B6FF',
            100: '#38B6FF',
            200: '#38B6FF',
            300: '#38B6FF',
            400: '#38B6FF',
            500: '#38B6FF',
            600: '#38B6FF',
            700: '#38B6FF',
            800: '#38B6FF',
            900: '#38B6FF',

        },
    },

    fonts: {
        heading: `Inter, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
});

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
