import { FormInput, FormLabel, GrayScaleFormContainer } from "./grayScalePanelStyle";

export const GrayScalePanel = props => {
    const handleChange = () => {
        props.setGrayScale(!props.grayScale);
    }

    return(
        <GrayScaleFormContainer>
            <FormLabel>Grayscale</FormLabel>
            <FormInput type="checkbox" onChange={() => handleChange()}/>
        </GrayScaleFormContainer>
    )
}