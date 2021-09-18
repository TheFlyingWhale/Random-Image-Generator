export const TextForm = props => {

    const handleChange = event => {
        props.setter(event);
    }

    return(
        <form>
            <label>{props.name ? props.name : null}</label>
            <input 
                type="text" 
                value={props.value} 
                onChange={e => handleChange(e.target.value)}
            />
        </form>
    )
}