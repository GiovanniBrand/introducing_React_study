import './Form.css'
import TextField from '../textField';
import SuspenseList from '../SuspenseList';
import Bttn from '../bttn';
import { useState } from 'react';

const Form = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const Onsave = (event) => {
        event.preventDefault()
        props.colaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    return(
        <section className="formulario">
            <form onSubmit={Onsave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    Alterado={valor => setNome(valor)}
                />

                <TextField 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    Alterado={valor => setCargo(valor)}
                />

                <TextField  
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem ex: https://github.com/(seu user no github).png"
                    valor={imagem}
                    Alterado={valor => setImagem(valor)}
                />

                <SuspenseList 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    onChange={valor => setTime(valor)}
                />

                <Bttn>
                    Criar Card
                </Bttn>
            </form>
        </section>  
    );
}

export default Form