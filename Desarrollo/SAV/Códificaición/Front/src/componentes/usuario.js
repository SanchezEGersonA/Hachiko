import React from 'react';
import Menu from './menu';
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

    
     render(){

}
export default usuario;