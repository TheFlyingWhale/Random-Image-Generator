import styled from 'styled-components';
import { Colors } from '../../../styles/colors';

export const StyledImageContainer = styled.div`
    max-width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${Colors.background.outputBg};
`;

export const Image = styled.img`
    max-height: 75vh;
    max-width: 75vw;
    border-radius: 5px;
`;