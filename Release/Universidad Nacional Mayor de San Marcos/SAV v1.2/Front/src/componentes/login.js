import React from 'react';
import './login.css'
import DataUsuario from "../json/usuario.json";
import { browserHistory } from 'react-router-3';
import swal from 'sweetalert';
import Home from "./home"
import HomeProfesor from "./homeProfesor"


class login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            contrasena: '',
            ingreso: true,
            isStudent: false,
            datos: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onClick = this.onClick.bind(this);

    }

    onClick = (e) => {
        this.setState({ ingreso: false });
    }

    onSubmit = (e) => {
        let currentComponent = this;
        fetch('https://back-ihc.herokuapp.com/api/login?email='
            + this.state.usuario + '&password=' + this.state.contrasena)
            .then(
                function (response) {
                    return response.json();
                }).then(function (data) {
                    if (data.tipo == -1) {
                        swal("Usuario Incorrecto", "", "error");
                    }
                    else if(data.tipo==1) {
                        // console.log(data);

                        swal("Bienvenido alumno" ,"", "success").then(
                            browserHistory.push('/home/'+ data.usuario_id))
                    }
                    else{
                        swal("Bienvenido profesor" ,"", "success").then(
                            browserHistory.push('/homep/'+ data.usuario))
                    }


                        // if (data.tipo == 0) {
                        //     currentComponent.setState({
                        //         ingreso: false,
                        //         isStudent: true,
                        //         datos: data
                        //     });
                        // } else if (data.tipo == 1) {
                        //     currentComponent.setState({
                        //         ingreso: false,
                        //         isStudent: false,
                        //         datos: data
                        //     });
                        // }
                    

                    // swal("Usuario Incorrecto", "", "error");


                }
                ).catch(function (error) {
                    console.log('Fetch Error :-S', error);
                    swal("Usuario Incorrecto", "", "error");
                });



        // var cons=0;
        // console.log(DataUsuario.login.length)
        // for(let i=0; i< DataUsuario.login.length;i++){
        //     console.log("xaddd"+DataUsuario.login[i].usuario);
        //     if((DataUsuario.login[i].usuario==this.state.usuario )
        //        && (DataUsuario.login[i].contrasena==this.state.contrasena)){

        //         cons=1;

        //        }
        //      else{
        //      }  



        // }

        // if (cons==1){
        //     swal("Ingresando" ,"", "success").then(
        //         this.setState({
        //             ingreso:false
        //         }))
        // }
        // else{
        //     swal("Usuario Incorrecto" ,"", "error");

        // }



    }
    onChange(e) {
        this.setState({ usuario: e.target.value });
    }
    onChange2(e) {
        this.setState({ contrasena: e.target.value });

    }

    /*componentWillMount() {
        fetch('https://back-ihc.herokuapp.com/api/login?email=cweimann@example.org&password=aulavirtual')
            .then(

                function (response) {
                    return response.json();
                }).then(function (data) {
                    console.log(data.programmings);
                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });


    }*/

    render() {
        // console.log (DataUsuario.login[2].contrasena);
        //console.log(DataUsuario.login.length);
        return (
            <div>
                {this.state.ingreso ? (
                    <body className="fondo">
                        <div className="">
                            <div className="modal-dialog text-center">
                                <div className="col-sm-8 main-section">
                                    <div className="modal-content ">
                                        <div className="col-12 user-img">
                                            <img src="https://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png"></img>
                                        </div>
                                        <form className="col-12">
                                            <div className="form-group" id="user-group">
                                                <input type="text" className="form-control" placeholder="Usuario" value={this.state.usuario} onChange={this.onChange}></input>
                                            </div>
                                            <div className="form-group" id="contrasena-group">
                                                <input type="password" className="form-control" placeholder="Contraseña" value={this.state.contrasena} onChange={this.onChange2}></input>
                                            </div>
                                        </form>
                                        <button type="submit" onClick={this.onSubmit} className="btn btn-primary"><i className="fas fa-sign-in-alt"></i> Ingresar</button>
                                        <div className="col-12 forgot">
                                            <a href="#">Recordar contraseña</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </body>) : (
                        <div>
                            {this.state.isStudent ? (
                                <HomeProfesor Datos = {this.state.datos}/>
                            ) : (
                                <Home Datos = {this.state.datos}/>
                            )}
                        </div>
                    )}
            </div>
        )
    }




}
export default login;