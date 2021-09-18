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
    
    background-color: blue;
`;

export const Title = styled.h1`
    color: orange;
`;