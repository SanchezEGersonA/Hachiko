import React from 'react';
import swal from 'sweetalert';
import { browserHistory } from 'react-router-3';

class navbarProfesor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.Cerrar = this.Cerrar.bind(this);
    }

    Cerrar = (e) => {
        swal({
            title: '¿Está seguro que quiere cerrar sesión?',
            text: 'Perderá los cambios sin guardar',
            icon: 'warning',
            buttons: true,
            dangerMode: true
        })
        .then((willDelete) => {
            if(willDelete) {
                swal('Sesión cerrada exitosamente...!', {
                    icon: 'success'
                })
                .then(
                    browserHistory.push('/')
                );
            } else {
                swal('Guardar los cambios antes de salir');
            }
        });
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light mb-2 p-1 menu-color">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-white" href={"/homep" + "/" + this.props.teacherId}>Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">cursos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Mensajes</a>
                        </li>
                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i class="fas fa-user icono"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/user">Mis Datos</a>
                                <a class="dropdown-item" onClick={this.Cerrar}>Cerrar Sesion</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


        )
    }
}
export default navbarProfesor