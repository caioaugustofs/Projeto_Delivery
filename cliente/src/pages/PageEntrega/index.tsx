import React, { useState } from 'react';
import '../PageEntrega/style.scss'
import { Api } from '../../services/Api/axios-config'


type Entregas = {
  Entregador: string;
  Cliente: string;
  Valor: string;
  Descricao: string;
  Local_Retirada: string;
  Local_Entrega: string;
  Data_Criacao: string;
  Data_Hora_Retirada: string;
  Data_Hora_Entrega: string;
  Status: string;
}



const initEntregas = {
  Entregador: "",
  Cliente: "",
  Valor: "",
  Descricao: "",
  Local_Retirada: "",
  Local_Entrega: "",
  Data_Criacao: "",
  Data_Hora_Retirada: "",
  Data_Hora_Entrega: "",
  Status: "",
}


function App() {
  const [delivery, setDelivery] = useState<Entregas>({
    Entregador: "",
    Cliente: "",
    Valor: "",
    Descricao: "",
    Local_Retirada: "",
    Local_Entrega: "",
    Data_Criacao: "",
    Data_Hora_Retirada: "",
    Data_Hora_Entrega: "",
    Status: "",
   });



  const setNewDelivery = (id_: string, nemValue: string) =>
    setDelivery(prevState => ({ ...prevState, [id_]: nemValue }));


  const createDelivery = async () => {


    try {

      if (delivery.Entregador !== "") {

        if (delivery.Cliente !== "") {
          if (delivery.Valor !== "") {
            if (delivery.Descricao !== "") {
              if (delivery.Local_Retirada !== "") {
                if (delivery.Local_Entrega !== "") {
                  if (delivery.Data_Criacao !== "") {
                    if (delivery.Data_Hora_Retirada !== "") {
                      if (delivery.Data_Hora_Entrega !== "") {
                        if (delivery.Status !== "") {
                          if (delivery.Status !== "--------") {

                          const response = await Api.post('/entregas', delivery);
                    
                          if (response.status === 201) {
          
                            setDelivery({ ...initEntregas })
                            alert('OK - Entrega salva.')
                          }

                        }}}}}}}}}}

      } else (alert('Error: Algum campo está vazio'))

    } catch (exception_) { }
  };


  return (
    <div className="App--conteiner">
      <nav className='menu'>
        <ul className='menu-ul'>
          <li><a href="/" className='Menulink'>Cadastro</a></li>
          <li><a href="http://localhost:3003" className='Menulink'>Chat</a></li>

        </ul>
      </nav>

      <div className="entrgas--conteiner">
        <h1 className='entrgas--title'>Entregas</h1>
        <form>

          <input
            type="text"
            name='entregador'
            id='entregador'
            required
            value={delivery.Entregador}
            placeholder="Entregador"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Entregador', evt.target.value); }}
          />
          <input
            type="text"
            name='cliente'
            id='cliente'
            required
            value={delivery.Cliente}
            placeholder="Cliente"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Cliente', evt.target.value); }}
          />
          <input
            type="text"
            name='valor'
            id='valor'
            required
            value={delivery.Valor}
            placeholder="Valor R$"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Valor', evt.target.value); }}
          />
          <input
            type="text"
            name='descricao'
            id='descricao'
            required
            value={delivery.Descricao}
            placeholder="Descrição"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Descricao', evt.target.value); }}
          />
          <input
            type="text"
            name='local_retirada'
            id='local_retirada'
            required
            value={delivery.Local_Retirada}
            placeholder="Local Retirada"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Local_Retirada', evt.target.value); }}
          />
          <input
            type="text"
            name='local_entrega'
            id='local_entrega'
            required
            value={delivery.Local_Entrega}
            placeholder="Local Entrega"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Local_Entrega', evt.target.value); }}
          />
          <input
            type="date"
            name='data_criacao'
            id='data_criacao'
            required
            value={delivery.Data_Criacao}
            placeholder="Data Criação"
            min="2021-01-01T00:00"
            max="2050-01-01T00:00"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Data_Criacao', evt.target.value); }}
          />
          <input
            type="datetime-local"
            name='data_hora_retirada'
            id='data_hora_retirada'
            required
            value={delivery.Data_Hora_Retirada}
            placeholder="Data Hora Retirada"
            min="2021-01-01T00:00"
            max="2050-01-01T00:00"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Data_Hora_Retirada', evt.target.value); }}
          />
          <input
            type="datetime-local"
            name='data_hora_entrega'
            id='data_hora_entrega'
            required
            value={delivery.Data_Hora_Entrega}
            placeholder="Data Hora Entrega"
            min="2021-01-01T00:00"
            max="2050-01-01T00:00"
            className="conteiner--input"
            onChange={evt => { setNewDelivery('Data_Hora_Entrega', evt.target.value); }}
          />

          <select
            name="status"
            id="status"
            value={delivery.Status}
            className="conteiner--dropdown"
            onChange={evt => { setNewDelivery('Status', evt.target.value); }}
            required
          >
            <option value=""></option>
            <option value="0">Solicitado</option>
            <option value="1">Em Andamento</option>
            <option value="2">Concluído</option>
            <option value="3">Cancelado</option>

          </select>

          <button className="botao" onClick={() => createDelivery()}>
            Salvar
          </button>
        </form>



      </div>

    </div>
  );
}

export default App;
