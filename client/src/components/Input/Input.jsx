import './input.scss'

function Input(props) {
    const ID = Math.random()
    const {
        type = 'text',
        label = '',
        value = '',
        onChange = () => { },
        required = false,
    } = props

    return (<div className="input">
        <input 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            className="input__field" 
            type={type} 
            placeholder={label} 
            id={ID} 
            required={required}
            />
        <label htmlFor={ID} className="input__label">{label}</label>
    </div>);
}

export default Input;