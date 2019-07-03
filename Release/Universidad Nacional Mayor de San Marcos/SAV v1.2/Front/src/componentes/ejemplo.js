import React from 'react';
import Menu from './menu'
import Tareasycursos from './tareas-cursos'
import Navbar from './navbar'
import './home.css'

class ejemplo extends React.Component{

    render(){
        return(
            <div class="wrapper pr-1 pl-1">
            <Menu></Menu>
            <div class="container">
                <Navbar></Navbar>
                <Tareasycursos></Tareasycursos>
            </div>
            
            </div>
        )
    }

}
export default ejemplo;