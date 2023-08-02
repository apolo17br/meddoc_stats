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
        heading: `Inter, 'sans-serif'`,
        body: `Inter, sans-serif`,
    },
});

export default theme;