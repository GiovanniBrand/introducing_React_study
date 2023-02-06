import './ListSuspense.css'

const SuspenseList = (props) => {
    return(
        <div className="suspense-list">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={event => props.onChange(event.target.value)}>
                <option value=''></option>
                {props.itens.map( item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SuspenseList