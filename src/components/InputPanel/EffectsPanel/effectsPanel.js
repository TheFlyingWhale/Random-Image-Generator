import { GrayScalePanel } from "./GrayScalePanel/grayScalePanel"
import { BlurPanel } from "./BlurPanel/blurPanel"

export const EffectsPanel = props => {
    return(
        <>
            <h1>Effects</h1>
            <BlurPanel
                blur={props.blur}
                setBlur={props.setBlur}
            />
            <GrayScalePanel
                grayScale={props.grayScale}
                setGrayScale={props.setGrayScale}
            />
        </>
    )
}