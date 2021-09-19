import styled from "styled-components";
import { Colors } from "../../../styles/colors";

export const SizePanelContainer = styled.div`
    padding: 25px 25px 25px 25px;

    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    display: grid;

    grid-template-columns: 50% 50%;

    grid-template-rows: 27px 1fr;
    row-gap: 10px;

    border-bottom: 1px solid ${Colors.div};
`;

export const TitleContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;

    grid-row-start: 1;
    grid-row-end: 2;
`;

export const LeftFormContainer = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;

    grid-row-start: 2;
    grid-row-end: 3;
`;

export const RightFormContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;

    grid-row-start: 2;
    grid-row-end: 3;
`;