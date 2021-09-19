import { TextForm } from "../../General/SizeInput/textForm"

export const GeneratePanel = props => {
    return(
        <>
            <h1>Generate</h1>
            <p>Generate button</p>
            <TextForm 
                name="Seed" 
                value={props.seed} 
                setter={props.setSeed}
            />
        </>
    )
}