import { FormInput, FromLabel, TextFormContainer } from "./textFormStyles";

export const TextForm = props => {

    const handleChange = event => {
        props.setter(event);
    }

    return(
        <TextFormContainer>
            <FromLabel>{props.name ? props.name : null}</FromLabel>
            <FormInput 
                type="text" 
                value={props.value} 
                onChange={e => handleChange(e.target.value)}
            />
        </TextFormContainer>
    )
}