import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #051D3B;
        --red: #e52e4d;
        --blue: rgba(80, 129, 251, 0.16);
        --green: #33cc95;

        --blue-light: #5081FB;
        --input-background: rgba(255, 255, 255, 0.16);

        --text-title: #363f5f;
        --text-body: #969cb3;

        --text-input: #ffffff;
    }

    body {
        background: var(--background);
    }
`;