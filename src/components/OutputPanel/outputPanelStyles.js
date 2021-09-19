import styled from 'styled-components';
import { Colors } from '../../styles/colors';

export const OutputPanelContainer = styled.div`
    height: 100%;
    width: 100%;
    
    background-color: ${Colors.background.outputBg};

    grid-column-start: 2;
    grid-column-end: 3;

    display: grid;

    grid-template-rows: 90% 1fr 1fr;
`;