import styled from "styled-components";
import { Colors } from "../../../../styles/colors";
import { Text } from "../../../../styles/text";

export const GrayScaleFormContainer = styled.form`
    display: grid;

    grid-template-columns: 1fr 2fr;

    align-items: center;
`;

export const FormLabel = styled.label`
    color: ${Colors.text.gray};
    font-family: ${Text.family.heebo};
`;

export const FormInput = styled.input`
    width: 15px;
    height: 15px;
`;