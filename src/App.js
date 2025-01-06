import MostraNome from "./components/Nome";
import Teste from "./components/teste";
import { useState, useEffect } from 'react';

//componente é sempre com a primeira letra maiuscula
//Se eu criar um componente em outro arquivo eu preciso exportar ele
//e importar no arquivo que vou utilizar
//pra passar propriedades entre componentes eu faço assim aluno="Lucas"
//e recebo como parametro na função de criação do componente essa propriedade
//ou eu posso desestruturar no parametro pra pegar só oque eu quero 
//fazendo function Nome({ aluno }) ao invés de  function Nome(props.aluno)
function App(){
  //useState serve para deixar dinamico a propriedade
  //eu passo o nome da propriedade e depois o nome da função que vai alterar ela
  //dai eu passo dentro do parametro do useState o valor inicial que irá começar
  /*
  const [aluno, setAluno] = useState('Sujeiro programador')
  function handleChangeName(nome){
    setAluno(nome)
  }
  return (
    <div>
      <h1>Componente app</h1>
      <h2>Olá: {aluno}</h2>
      <MostraNome aluno="Lucas" idade={30}/>
      <br/>

      <button onClick={ () => handleChangeName('Com arow') }>
        Mudar nome com arow
      </button>
      
    </div>
  );*/
  //FORMULÁRIOS
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState(['Pagar conta de luz', 'Estudar react JS']);

  //toda vez que entra na tela(monta o compoenent) ele chama a useEffetc
  //tipo on onInit do angular
  //se eu colocar algo dentro do array, toda vez que o valor mudar ele chama a useEffect
  //uma mistura de onInit com onChange

  //deu problema na ordem, sempre deixar primeiro useEffect com array vazio
  useEffect(()=>{
    console.log('segundo useEffect')
    const tarefasStorage = localStorage.getItem('@tarefa');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
      console.log('teste', tarefasStorage)
    }
  }, [])


  useEffect(()=>{
    console.log('primeiro use effect')
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  }, [tarefas])

 

  function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefas, input])
    setInput('');
  }

  return(
    <div>
      <h1>Cadastrando usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label>

        <input
         value={input}
         onChange={ (e) => setInput(e.target.value)} 
         placeholder="Digite uma tarefa"/>
         <button type="submit">Registrar</button>
      </form>

      <br/>
      <br/>
      
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  )



}

export default App;

