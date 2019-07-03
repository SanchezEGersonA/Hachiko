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
        swal("" ,"", "success").then(browserHistory.push('/'))

    }

    render(){
        return()
    }
}
export default navbar