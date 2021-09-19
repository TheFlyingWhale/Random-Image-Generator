import { StyledButton } from "./buttonStyle"

export const Button = (props) => {
    return(
        <StyledButton
            type="button"
            value={props.value ? props.value : ''}
        />
    )
}