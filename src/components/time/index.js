import './time.css'
import Colab from '../Colab'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const css2 = {
        borderColor:props.corPrimaria,
                color:props.corPrimaria}
    return(
        
       /* props.colaboradores.length > 0 && <section className="time" style={css}>
            <h3 style={css2}>{props.nome}</h3>

            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colab 
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                img={colaborador.imagem}/>)}
            </div>
        </section>*/
        props.colaboradores.length > 0 ? <section className="time" style={css}>
            <h3 style={css2}>{props.nome}</h3>

            <div className='colaboradores'>
            {props.colaboradores.map( colaborador => <Colab 
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                img={colaborador.imagem}
                corPrimaria={props.corPrimaria}
                />)}
                
            </div>
        </section>
        :''
    )
}

export default Time