export const BlurPanel = props => {
    
    const handleChange = e => {
        props.setBlur(e);
    }

    return(
        <form>
            <label>Blur</label>
            <input 
                type="range"
                min="0"
                max="10"
                value={props.blur}

                onChange={e => handleChange(e.target.value)}
            />
        </form>
    )
}