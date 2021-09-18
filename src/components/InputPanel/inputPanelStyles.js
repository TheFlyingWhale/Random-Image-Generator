import styled from 'styled-components'
import { Colors } from '../../styles/colors'

export const InputPanelContainer = styled.div`
    height: 100%;
    width: 100%;

    background-color: ${Colors.background.default};
    color: ${Colors.text.default};

    grid-column-start: 1;
    grid-column-end: 2;
`