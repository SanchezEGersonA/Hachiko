import React from 'react';
// import { Router, Route, browserHistory } from 'react-router-3';
// import { Router, Route, browserHistory } from 'react-router-3';

import ReactDOM from 'react-dom';
import './index.css';
import Login from './componentes/login';
import home from './componentes/home';


import * as serviceWorker from './serviceWorker';
import { browserHistory,Router,Route } from 'react-router-3';
import homeProfesor from './componentes/homeProfesor';
import ejemplo from './componentes/ejemplo';
import cursos from './componentes/cursos';
import cursosProfesor from './componentes/cursosProfesor';
import usuario from './componentes/usuario';
import usuarioProfesor from './componentes/usuarioProfesor';

class Index extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Router 
                    component={()=> <Login/>}
                    path="/">
                </Router>
                <Router path="/home/:id" component={home}></Router>
                <Router  path="/homep/:id" component={homeProfesor}></Router>
                <Router  path="/prueba" component={ejemplo}></Router>
                <Router  path="/curso/:cursoid/:alumnoid" component={cursos}></Router>
                <Router  path="/cursop/:cursoid/:profesorid" component={cursosProfesor}></Router>
                <Router  path="/usuario/:alumno" component={usuario}></Router>
                <Router  path="/usuariop/:profesor" component={usuarioProfesor}></Router>
            </Router>
        )
    }
}




ReactDOM.render(<Index/>, document.getElementById('root'));
serviceWorker.unregister();
