export const GrayScalePanel = props => {
    const handleChange = () => {
        props.setGrayScale(!props.grayScale);
    }

    return(
        <form>
            <label>Grayscale</label>
            <input type="checkbox" onChange={() => handleChange()}/>
        </form>
    )
}