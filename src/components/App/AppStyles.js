import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const AppContainer = styled.div`
    height: 100%;

    display: grid;
    grid-template-columns: 300px auto;

    background-color: pink;
`;