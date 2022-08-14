import React from 'react';


import {BrowserRouter, Routes, Route, Link} from  'react-router-dom'

import PgCadastro from './pages/PageCadastro'
import PgEntrega from './pages/PageEntrega'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<PgCadastro/>}/>
          <Route path='/entrega' element={<PgEntrega/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
