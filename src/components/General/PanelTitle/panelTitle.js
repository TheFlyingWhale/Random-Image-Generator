import { StyledPanelTitle } from "./panelTitleStyles"

export const PanelTitle = (props) => {
    return(
        <StyledPanelTitle>
            {props.titleText ? props.titleText : 'Placeholder text'}
        </StyledPanelTitle>
    )
}