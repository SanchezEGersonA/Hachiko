import React from 'react';
import { browserHistory } from 'react-router-3';
import swal from 'sweetalert';

class navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
        };
        this.Cerrar = this.Cerrar.bind(this);
        
    }

    Cerrar=(e)=>{
       // swal("Eres un cagon weon ...!" ,"", "success").then(
         //   browserHistory.push('/'))

         swal({
            title: "¿Está seguro que quiere cerrar la sesión?",
            text: "perdera los cambios sin guardar",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("sesión cerrada exitosamente...!", {
                icon: "success",
              }).then(
                browserHistory.push('/')
              )
              ;
            } else {
              swal("Guarda los cambios antes de salir");
            }
          });

    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light mb-2 p-1 menu-color">

                    {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fa fa-align-justify"></i> <span>toggle sidebar</span>
            </button> */}

                    {/* <!--<a class="navbar-brand" href="#">Navbar</a> --> */}
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto ">
                            <li class="nav-item active">
                                <a class="nav-link text-white" href={"/home/"+ this.props.alumnoid}><strong>Home</strong> <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"><strong>Cursos</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"><strong>Mensajes</strong></a>
                            </li>
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i class="fas fa-user icono"></i></a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href={"/usuario/"+this.props.alumnoid}>mis datos</a>
                                    <a class="dropdown-item" onClick={this.Cerrar} >Cerrar Sesion</a>
                                    {/* <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Something else here</a> */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

  
        )
    }
}
export default navbar