import { TextForm } from "../../General/TextForm/textForm"
import { PanelTitle } from "../../General/PanelTitle/panelTitle"
import { LeftFormContainer, RightFormContainer, SizePanelContainer, TitleContainer } from "./sizePanelStyles"

export const SizePanel = props => {
    return(
        <SizePanelContainer>
            <TitleContainer>
                <PanelTitle titleText="Size"/>
            </TitleContainer>
            <LeftFormContainer>
                <TextForm name="W" value={props.width} setter={props.setWidth}/>
            </LeftFormContainer>
            <RightFormContainer>
                <TextForm name="H" value={props.height} setter={props.setHeight}/>
            </RightFormContainer>
        </SizePanelContainer>
    )
}