import styled from "styled-components";
import { Colors } from "../../../../styles/colors";
import { Text } from "../../../../styles/text";

export const BlurFormContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 4fr;
`;

export const FormLabel = styled.label`
    font-family: ${Text.family.heebo};
    font-size: ${Text.size.default};
    color: ${Colors.text.gray};
`;

export const FormInputContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 8fr 1fr;
`;

export const FormDetail = styled.p`
    text-align: center;
    font-family: ${Text.family.heebo};
    font-size: ${Text.size.small};
    color: ${Colors.text.gray};
    padding-top: 3px;
`;

export const FormInput = styled.input`

`;