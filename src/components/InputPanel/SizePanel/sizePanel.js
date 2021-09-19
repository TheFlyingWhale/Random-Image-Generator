import { NumberForm } from "../../General/NumberForm/numberForm"
import { PanelTitle } from "../../General/PanelTitle/panelTitle"
import { LeftFormContainer, RightFormContainer, SizePanelContainer, TitleContainer } from "./sizePanelStyles"

export const SizePanel = props => {
    return(
        <SizePanelContainer>
            <TitleContainer>
                <PanelTitle titleText="Size"/>
            </TitleContainer>
            <LeftFormContainer>
                <NumberForm name="W" value={props.width} setter={props.setWidth}/>
            </LeftFormContainer>
            <RightFormContainer>
                <NumberForm name="H" value={props.height} setter={props.setHeight}/>
            </RightFormContainer>
        </SizePanelContainer>
    )
}