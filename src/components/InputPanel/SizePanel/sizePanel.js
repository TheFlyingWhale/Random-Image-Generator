import { TextForm } from "../../General/SizeInput/textForm"

export const SizePanel = props => {
    return(
        <>
            <h1>SizePanel Title</h1>
            <TextForm name="W" value={props.width} setter={props.setWidth}/>
            <TextForm name="H" value={props.height} setter={props.setHeight}/>
        </>
    )
}