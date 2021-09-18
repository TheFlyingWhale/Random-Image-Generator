import { InputPanelContainer } from "./inputPanelStyles";
import { GeneratePanel } from './GeneratePanel/generatePanel.js'
import { SizePanel } from "./SizePanel/sizePanel";
import { EffectsPanel } from "./EffectsPanel/effectsPanel";

export const InputPanel = props => {
    return(
        <InputPanelContainer>
            <GeneratePanel
                seed={props.seed}

                setSeed={props.setSeed}
            />
            <SizePanel 
                width={props.width}
                height={props.height}

                setWidth={props.setWidth}
                setHeight={props.setHeight}
            />
            <EffectsPanel
                blur={props.blur}
                grayScale={props.grayScale}

                setBlur={props.setBlur}
                setGrayScale={props.setGrayScale}
            />
        </InputPanelContainer>
    )
}