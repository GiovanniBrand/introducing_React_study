
import './textField.css'

const TextField = (props) => {
    

    const onEnter = ( event ) => {
        props.Alterado(event.target.value)
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onEnter} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField