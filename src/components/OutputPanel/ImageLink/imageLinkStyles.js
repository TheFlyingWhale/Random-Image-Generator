import styled from "styled-components";
import { Colors } from "../../../styles/colors";
import { Text } from "../../../styles/text";

export const ImageLinkContainer = styled.div`
    display: grid;

    grid-template-columns: 1fr 3fr;
`;

export const LinkLabel = styled.p`
    font-family: ${Text.family.heebo};
    font-size: ${Text.size.default};
    color: ${Colors.text.default};
`;

export const LinkUrl = styled.a`
    font-family: ${Text.family.heebo};
    font-size: ${Text.size.default};
    color: ${Colors.text.link};
`;