import Form from './components/Form';
import Banner from './components/Banner/banner';
import { useEffect, useState } from 'react';
import Time from './components/time';
import Footer from './components/footer';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]
  
  const[colaboradores, setColaboradores] = useState([])


  useEffect(() => {
    const colaboradoresLocalStorageInit = JSON.parse(localStorage.getItem('colaboradores')) || []  
    if(colaboradoresLocalStorageInit){
        setColaboradores(colaboradoresLocalStorageInit)
      }
  }, []);

  let colaboradoresLocalStorage = JSON.parse(localStorage.getItem('colaboradores')) || []
  
  const coloaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])

    colaboradoresLocalStorage.push(colaborador)
    localStorage.setItem("colaboradores", JSON.stringify(colaboradoresLocalStorage))
  }

  return (
    <div className="App">
      <Banner />
      <Form  times={times.map(time => time.nome)} colaboradorCadastrado={coloaboradorAdicionado}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Footer/>
    </div>
  );
}

export default App;
