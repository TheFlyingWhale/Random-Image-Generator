import { NumberForm } from "../../General/NumberForm/numberForm"
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

            <NumberForm 
                name="Seed" 
                value={props.seed} 
                setter={props.setSeed}
            />
        </GeneratePanelContainer>
    )
}