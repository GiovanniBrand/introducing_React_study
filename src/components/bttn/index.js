import './bttn.css'

const Bttn = (props) => {
    return(
       <button className="bttn">{props.children}</button>
    )
}

export default Bttn