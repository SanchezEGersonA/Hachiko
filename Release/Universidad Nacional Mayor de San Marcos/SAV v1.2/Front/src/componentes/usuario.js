// import React from 'react';
// import Menu from './menu';
// import Navbar from './navbar';
// import './usuario.css'
// class usuario extends React.Component{
    
//     constructor(props) {
//         super(props);
//         this.state = {
            
//             cursos: [],
//             datos:{}
//         };

//     }
//     componentWillMount() {
//         let currentComponent = this;
//         let array = [];
//         // let array2=[];
//         let i = 0;
//         fetch('https://back-ihc.herokuapp.com/api/student?id=' + this.props.params.alumno)
//             .then(

//                 function (response) {
//                     return response.json();
//                 }).then(function (data) {
//                     console.log(data.programmings[0].courses[0].name);
//                     data.programmings.forEach(element => {
//                     array[i]={    
//                      "creditos":element.courses[0].credit,
//                       "ciclo" :element.courses[0].cycle,
//                       "curso":element.courses[0].name,
//                       "id":element.courses[0].id,
//                        "nprofesor": element.teachers[0].name,
//                         "aprofesor":element.teachers[0].surname,
//                         "salon":element.classroom
//                     }
//                         // array[i]=element.courses[0];   
//                         // console.log(array2[i])
//                         console.log('[CurrentArray]: ' + array[i]);
//                         i++;
//                     });

//                     // console.log("este es "+array[1].id);
//                     currentComponent.setState({
//                         cursos: array,
//                         datos:data

//                     })

//                 })
//             .catch(function (err) {
//                 console.log('Fetch Error :-S', err);
//             });

//     }

    
//     render(){
//         return(

//             <div class="wrapper pr-1 pl-1">
            
//             <Menu cursos={this.state.cursos} alumnoid={this.props.params.alumno}></Menu>
//             <div className="container">
            
//             <Navbar alumnoid={this.props.params.alumno}></Navbar>

//             <div className="container dim_">
//             <div className="row sombras_ mt-5">
//             <div className="col-12 p-5">
//                 <form>
//                     <div class="form-row">
//                         <div class="form-group col-md-6">
//                         <label for="inputEmail4">Nombres</label>
//                         <input type="text" class="form-control" id="inputEmail4" placeholder="Nombres" value={this.state.datos.name} disabled/>
//                         </div>
//                         <div class="form-group col-md-6">
//                         <label for="inputPassword4">Apellido</label>
//                         <input type="text" class="form-control" id="inputPassword4" placeholder="Apellido" value={this.state.datos.surname} disabled/>
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <label for="inputAddress">Direccion</label>
//                         <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value="av.Marquez de Corpac Mz C Lt 18"/>
//                     </div>
//                     <div class="form-row">
//                     <div class="form-group col-md-3">
//                         <label for="inputAddress2">Ciclo</label>
//                         <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.cycle} disabled/>
//                     </div>
//                     <div class="form-group col-md-3">
//                         <label for="inputAddress2">plan</label>
//                         <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.plan} disabled/>
//                     </div>
//                     <div class="form-group col-md-3">
//                         <label for="inputAddress2">Promedio</label>
//                         <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.balanced} disabled/>
//                     </div>
//                     <div class="form-group col-md-3">
//                         <label for="inputAddress2">Estado</label>
//                         <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.situation} disabled/>
//                     </div>
//                     </div>
//                     <div class="form-group">
//                         <label for="inputAddress2">Correo Institucional</label>
//                         <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.email} disabled/>
//                     </div>
//                     <div class="form-row">
//                         <div class="form-group col-md-6">
//                         <label for="inputCity">Escuela profesional</label>
//                         <input type="text" class="form-control" id="inputCity" value="Ingenieria de Software" disabled/>
//                         </div>
//                         <div class="form-group col-md-4">
//                         <label for="inputState">Facultad</label>
//                         <input type="text" class="form-control" id="inputZip" value="Ingeniera de Sistemas e Informatica" disabled/>

//                         </div>
//                         <div class="form-group col-md-2">
//                         <label for="inputZip">Codigo</label>
//                         <input type="text" class="form-control" id="inputZip" value={this.state.datos.code} disabled/>
//                         </div>
//                     </div>
                   
//                     <a type="submit" href={"/home/"+this.props.params.alumno} class="btn color_">Aceptar</a>
//             </form>
        
//             </div>
//         </div>
        
//         </div>
//             </div>
//             </div>
//         )
//     }
// }
// export default usuario;

import React from 'react';
import Menu from './menu';
import swal from 'sweetalert';
import Navbar from './navbar';
class usuario extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            
            cursos: [],
            datos:{}
        };

    }
    componentWillMount() {
        let currentComponent = this;
        let array = [];
        // let array2=[];
        let i = 0;
        fetch('https://back-ihc.herokuapp.com/api/student?id=' + this.props.params.alumno)
            .then(

                function (response) {
                    return response.json();
                }).then(function (data) {
                    console.log(data.programmings[0].courses[0].name);
                    data.programmings.forEach(element => {
                    array[i]={    
                     "creditos":element.courses[0].credit,
                      "ciclo" :element.courses[0].cycle,
                      "curso":element.courses[0].name,
                      "id":element.courses[0].id,
                       "nprofesor": element.teachers[0].name,
                        "aprofesor":element.teachers[0].surname,
                        "salon":element.classroom
                    }
                        // array[i]=element.courses[0];   
                        // console.log(array2[i])
                        console.log('[CurrentArray]: ' + array[i]);
                        i++;
                    });

                    // console.log("este es "+array[1].id);
                    currentComponent.setState({
                        cursos: array,
                        datos:data

                    })

                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }

    handleChange(event) {
        

        // console.log(event.target.value);
        
        // fetch('http://localhost/api/document/',{
        //     method:'POST',
        //     body:0
        // })
        //     .then(

        //         function (response) {
        //             return response.json();
        //         }).then(function (data2) {
        //             console.log(data2);
        //         })
        //     .catch(function (err) {
        //         console.log('Fetch Error :-S', err);
        //     });
      }
    
      handleSubmit(event) {

        // var id = event.target.id.value;
        // var nombres = event.target.nombres.value;
        // var apellidos = event.target.apellidos.value;
        // var dir = event.target.dir.value;
        const data = new FormData(event.target);
        fetch('http://localhost:8000/api/studentupdate/',{
            method:'POST',
            body: data
        })
            .then(
                function (response) {
                    return response.json();
                }).then(function (data2) {
                    if(data2 == 'ok'){
                        swal("Actualizado correctamente" ,"", "success");
                    }
                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });




        event.preventDefault();
      }

      onClick=(e)=>{
        window.locationf="/home/"+this.props.params.alumno;
    }
    render(){
        return(

            <div class="wrapper pr-1 pl-1">
            
            <Menu cursos={this.state.cursos} alumnoid={this.props.params.alumno}></Menu>
            <div className="container">
            
            <Navbar alumnoid={this.props.params.alumno}></Navbar>

            <div className="container">
            <div className="row">
            <div className="col-12 p-5">
                <form onSubmit={this.handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Nombres</label>
                        <input type="hidden" value={this.props.params.alumno} name="id" onChange={this.handleChange}/>
                        <input type="text" class="form-control" id="inputEmail4" name="nombres" placeholder="Nombres" onChange={this.handleChange} value={this.state.datos.name} />
                        </div>
                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="text" class="form-control" id="inputPassword4" name="apellidos" placeholder="Apellido" onChange={this.handleChange} value={this.state.datos.surname} />
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Direccion</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="dir" onChange={this.handleChange} value={this.state.datos.address}/>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Ciclo</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.cycle} disabled/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">plan</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.plan} disabled/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Promedio</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.balanced} disabled/>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="inputAddress2">Estado</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.situation} disabled/>
                    </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Correo Institucional</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={this.state.datos.email} disabled/>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="inputCity">Escuela profesional</label>
                        <input type="text" class="form-control" id="inputCity" value="Ingenieria de Software" disabled/>
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">Facultad</label>
                        <input type="text" class="form-control" id="inputZip" value="Ingeniera de Sistemas e Informatica" disabled/>

                        </div>
                        <div class="form-group col-md-2">
                        <label for="inputZip">Codigo</label>
                        <input type="text" class="form-control" id="inputZip" value={this.state.datos.code} disabled/>
                        </div>
                    </div>
                   
                    {/* <a type="submit"  href={"/home/"+this.props.params.alumno} class="btn btn-primary">Aceptar</a> */}
                    <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>Aceptar</button>

            </form>
        
            </div>
        </div>
        
        </div>
            </div>
            </div>
        )
    }
}
export default usuario;
//