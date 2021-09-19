import { BlurFormContainer, FormDetail, FormInputContainer, FormLabel } from "./blurPanelStyle";

export const BlurPanel = props => {
    
    const handleChange = e => {
        props.setBlur(e);
    }

    return(
        <BlurFormContainer>
            <FormLabel>Blur</FormLabel>
            <FormInputContainer>
                <FormDetail>0</FormDetail>
                <input 
                    type="range"
                    min="0"
                    max="10"
                    value={props.blur}

                    onChange={e => handleChange(e.target.value)}
                />
                <FormDetail>10</FormDetail>
            </FormInputContainer>
        </BlurFormContainer>
    )
}