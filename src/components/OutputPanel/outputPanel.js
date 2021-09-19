import { OutputPanelContainer } from "./outputPanelStyles"
import { ImageContainer } from "./ImageContainer/ImageContainer"
import { ImageLink } from "./ImageLink/imageLink"

export const OutputPanel = props => {
    return(
        <OutputPanelContainer>
            <ImageContainer imageUrl={props.imageUrl}/>
            <ImageLink imageUrl={props.imageUrl}/>
        </OutputPanelContainer>
    )
}