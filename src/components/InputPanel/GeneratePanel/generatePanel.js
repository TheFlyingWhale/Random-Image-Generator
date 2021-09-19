import { TextForm } from "../../General/TextForm/textForm"
import { StyledButton } from "../../General/Button/buttonStyle"
import { PanelTitle } from "../../General/PanelTitle/panelTitle"
import { GeneratePanelContainer } from "./generatePanelStyles"
import { generateRandomSeed } from "../../../functions/generateRandomSeed"

export const GeneratePanel = props => {
    const handleClick = () => {
        props.setSeed(generateRandomSeed());
    }

    return(
        <GeneratePanelContainer>
            <PanelTitle 
                titleText="Generate"
            />

            <StyledButton
                onClick={handleClick}
            > 
                New Image
            </StyledButton>

            <TextForm 
                name="Seed" 
                value={props.seed} 
                setter={props.setSeed}
            />
        </GeneratePanelContainer>
    )
}