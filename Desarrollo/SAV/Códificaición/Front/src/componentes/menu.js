import React from 'react';
import Calendar from 'react-calendar';
import './menu.css'
class menu extends React.Component{

    state = {
        date: new Date(),
      }
      onChange = date => this.setState({ date })
    


    render(){
        return(
            
            <nav id="sidebar">
                <div class="sidebar-header pb-2 pt-2 estilo_text">
                    <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png"></img>
                </div>


                <ul class="list-unstyled components">
                    <p  className="fuentes">#hachikonight v2.0 Remastered</p>
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">

                            {
                                this.props.cursos.map((curso)=>{
                                   return( <li>
                                        <a href={"/curso/"+curso.id+"/"+this.props.alumnoid} >{curso.curso}</a>
                                    </li>)
                                })
                            } 

                        </ul>
                    </li>


                    <li>
                        <a href="#">Acerca de</a>
                    </li>
                    <li>
                        <a href="#">Contactenos</a>
                    </li>
                </ul>

                
                <div className="calendario m-1">
                    <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                    />
                </div>
                

                {/* <ul class="list-unstyled CTAs">
                <li>
                    <a href="#" class="download">Download code</a>
                </li>
                <li>
                    <a href="#" class="article">article</a>
                </li>
            </ul> */}
            </nav>

            
        


        )
    }
}

export default menu;