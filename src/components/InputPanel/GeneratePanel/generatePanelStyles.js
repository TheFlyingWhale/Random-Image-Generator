import styled from "styled-components";
import { Colors } from "../../../styles/colors";

export const GeneratePanelContainer = styled.div`
    padding: 25px 25px 25px 25px;

    display: grid;

    grid-template-rows: 27px 1fr 1fr;
    row-gap: 10px;

    border-bottom: solid 1px ${Colors.div};
`;