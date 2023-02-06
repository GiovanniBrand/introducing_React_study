import './Colab.css';

const Colab = ({nome, img, cargo, corPrimaria}) => {

    return(
        <div className='colaborador'>
            
            <div className='cabecalho' style={{backgroundColor: corPrimaria}}>
                <img src={img} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4 style={{color: corPrimaria}}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
        )
}

export default Colab;