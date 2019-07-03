import React from 'react';
import Menu from './menu';
import swal from 'sweetalert';
import Navbar from './navbar';
import './usuario.css'
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

     handleChange(event){
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

     handleSubmit(event){
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

}
export default usuario;