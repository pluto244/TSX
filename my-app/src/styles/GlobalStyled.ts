import { theme } from './Theme';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        
        margin: 0;
        font-family:'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.mainFont};
        line-height: normal;
        background-color: ${theme.colors.primaryBg};

    }
        
    ul{
        list-style: none;
    }

button {
    background-color: ${theme.colors.pink};
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: ${theme.colors.green};
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
}

button:disabled {
    background-color: gray;
    cursor: not-allowed;
    color: white;
}

`