import React, { useState } from 'react';
import '../PageCadastro/style.scss';
import { Api } from '../../services/Api/axios-config'



type User = {
  Nome: string;
  Email: string;
  Senha: string;
  Tipo: string;
};


const initialState = {
  Nome: "",
  Email: "",
  Senha: "",
  Tipo: "",
}


function App() {
  const [user, setUser] = useState<User>({
    Nome: "",
    Email: "",
    Senha: "",
    Tipo: "",
  });


  const setNewValues = (id_: string, nemValue: string) =>
    setUser(prevState => ({ ...prevState, [id_]: nemValue })

    );


  const createNemUser = async () => {

    try {
      if (user.Tipo !== "") {if (user.Tipo !== "------") {
        if (user.Email !== "") {
          if (user.Senha !== "") {
            if (user.Nome !== "") {const response = await Api.post('/cadastro', user);
              if (response.status === 201) {
                alert('OK - Usuário Cadastrado com sucesso')
                setUser({ ...initialState })
              }
            }
          }
        }}

      } else (alert('Error: Algum campo está vazio'))
    } catch (exception_) { }
  };


  return (
    <div className="App--conteiner">
      <nav className='menu'>
        <ul className='menu-ul'>
          <li><a href="/entrega" className='Menulink'>Entregas</a></li>
          <li><a href="http://localhost:3003" className='Menulink'>Chat</a></li>
        </ul>
      </nav>

      <div className="cadastro--conteiner">
        <h1 className="cadastro--title">Cadastro</h1>
        <form>
          <input
            type="text"
            name='name'
            id='name'
            value={user.Nome}
            placeholder="Nome"
            className="conteiner--input"
            required
            onChange={evt => { setNewValues('Nome', evt.target.value); }}

          />

          <input
            type="email"
            name='email'
            id='email'
            value={user.Email}
            placeholder="Email"
            className="conteiner--input"
            required
            onChange={evt => { setNewValues('Email', evt.target.value); }}

          />
          <input
            type="password"
            name='senha'
            id='senha'
            value={user.Senha}
            placeholder="Senha"
            className="conteiner--input"
            required
            onChange={evt => { setNewValues('Senha', evt.target.value); }}

          />

          <select
            name="tipo"
            id="tipo"
            value={user.Tipo}
            className="conteiner--dropdown"
            onChange={evt => { setNewValues('Tipo', evt.target.value); }}
            required
          >
            <option value=""></option>
            <option value="cliente">Cliente</option>
            <option value="entregador">Entregador</option>

          </select>

          <button className="botao" onClick={() => createNemUser()}>
            Cadastrar
          </button>
        </form>


      </div>

    </div>
  );
}

export default App;
