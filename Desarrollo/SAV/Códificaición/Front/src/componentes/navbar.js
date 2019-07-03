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
        //swal("" ,"", "success").then(browserHistory.push('/'))

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
        return()
    }
}
export default navbar