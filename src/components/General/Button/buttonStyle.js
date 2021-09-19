import styled from 'styled-components'
import { Text } from '../../../styles/text'
import { Colors } from '../../../styles/colors'

export const StyledButton = styled.button`
    width: 100%;
    height: 40px;

    border-radius: 5px;
    border: none;

    font-family: ${Text.family.heebo};
    font-weight: ${Text.weight.medium};
    font-size: ${Text.size.default};

    color: ${Colors.text.lightBlack};
    background-color: ${Colors.background.buttonInActive};

    &:hover{
        background-color: ${Colors.background.buttonActive};
        color: white;
        cursor: pointer;
    }

    &:active{
        color: ${Colors.text.gray};
    }
`