import { FormInput, FromLabel, TextFormContainer } from "./numberFormStyles";

export const NumberForm = props => {

    //Handles change if component is not the seed component and input is between 0 - 5000
    const handleChange = event => {
        if(props.name !== 'Seed'){
            if(parseInt(event) > 5000 || parseInt(event) < 0){
                alert('Max Width and Height is 5000');
            }else{
                props.setter(event);
            }
        }else{
            props.setter(event);
        }
    }

    return(
        <TextFormContainer>
            <FromLabel>{props.name ? props.name : null}</FromLabel>
            <FormInput 
                type="number" 
                value={props.value}
                step="10"
                min={props.name !== 'Seed' ? '0' : 'null'}
                max={props.name !== 'Seed' ? '5000' : 'null'} 
                onChange={e => handleChange(e.target.value)}
            />
        </TextFormContainer>
    )
}