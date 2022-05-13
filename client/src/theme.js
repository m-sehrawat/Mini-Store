import { extendTheme } from '@chakra-ui/react';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const styles = {
    global: {
        body: {
            fontFamily: "'Source Sans Pro', sans-serif",
        },
        
    },
}

const Button = {
    baseStyle: {
        fontWeight: 'bold',
        borderRadius: '0px',
    },
    variants: {
        outline: {
            border: '2px solid',
            borderColor: '#0863be',
            color: '#0863be',
            _hover: {
                bg: '#0863be',
                color: 'white'
            },
        },
        solid: {
            bg: '#0863be',
            color: 'white',
            _hover: {
                bg: '#2d80d3',
                color: 'white'
            },
        },
    },
    defaultProps: {
        variant: 'outline',
    },
}

export const theme = extendTheme({
    config,
    styles,
    components: {
        Button,
    },

});

