import { GrayScalePanel } from "./GrayScalePanel/grayScalePanel"
import { BlurPanel } from "./BlurPanel/blurPanel"
import { PanelTitle } from "../../General/PanelTitle/panelTitle"
import { EffectPanelContainer } from "./effectsPanelStyles"

export const EffectsPanel = props => {
    return(
        <EffectPanelContainer>
            <PanelTitle titleText="Effects"/>
            <BlurPanel
                blur={props.blur}
                setBlur={props.setBlur}
            />
            <GrayScalePanel
                grayScale={props.grayScale}
                setGrayScale={props.setGrayScale}
            />
        </EffectPanelContainer>
    )
}