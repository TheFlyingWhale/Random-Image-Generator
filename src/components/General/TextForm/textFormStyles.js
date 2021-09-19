import styled from "styled-components";
import { Text } from '../../../styles/text';
import { Colors } from '../../../styles/colors';

export const TextFormContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 3fr;
`;

export const FromLabel = styled.label`
    font-family: ${Text.family.heebo};
    color: ${Colors.text.gray};
    text-align: center;

    grid-column-start: 1;
    grid-column-end: 2;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 25px;

    padding-left: 5px;

    border: none;
    border-radius: 5px;

    grid-column-start: 2;
    grid-column-end: 3;

    font-family: ${Text.family.heebo};
    font-size: ${Text.size.default};
`;