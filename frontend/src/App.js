import React from 'react';

import Main from './pages/main/index';
import V2d from './pages/v2d/index'
import Agente from './pages/agentevirtuais/index'
import Blackbox from './pages/blackbox/index'
import Divida from './pages/historico/lista_dividas'
import NewDivida from './pages/blackbox/criardivida/index'
import XBar from './pages/xbar/index'
import Edit2vd from './pages/v2d/edit'
import LpVendas from './pages/vendas/index'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Main} />
      <Route exact path="/v2d" component={V2d} />
      <Route exact path="/agente" component={Agente} />
      <Route exact path="/vendas" component={LpVendas} />
      <Route exact path="/blackbox" component={Blackbox} />
      <Route exact path='/listarDivida' component={Divida}/>
      <Route exact path='/criardivida' component={NewDivida}/>
      <Route exact path='/xbar' component={XBar}/>
      <Route exact path='/edit2vd' component={Edit2vd}/>


    </Router>
  );
}

export default (App);
