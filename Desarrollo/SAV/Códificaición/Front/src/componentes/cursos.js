import React from 'react';
import './cursos.css';
import swal from 'sweetalert';
import Menu from './menu'
import Navbar from './navbar'
class cursos extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            aparecer: true,
            aparecer2: false,
            cursos: [],
            curso_i: '',
            pnombre:'',
            papellido:'',
            curso:[]
        };

        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillMount() {
        let currentComponent = this;
        let array=[];
        // let array2=[];
        let i=0;
        fetch('https://back-ihc.herokuapp.com/api/student?id='+this.props.params.alumnoid)
            .then(

                function (response) {
                    return response.json();
                }).then(function (data) {
                    
                    currentComponent.setState({
                        curso: data.programmings
                        
                    })

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
                        //  console.log(array[i])
                        i++;
                    });

                   // console.log("este es "+array[1].id);
                    currentComponent.setState({
                        cursos: array
                        
                    })

                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

            fetch('https://back-ihc.herokuapp.com/api/course?id='+this.props.params.cursoid)
            .then(

                function (response) {
                    return response.json();
                }).then(function (data2) {
                 

                   console.log("datos: "+data2.programming.teachers[0].name);
                    currentComponent.setState({
                        pnombre:data2.programming.teachers[0].name,
                        papellido: data2.programming.teachers[0].surname,
                        curso_i: data2.name
                    })

                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }

    handleChange(event) {
        var file = event.target.files[0];

        var programmings = this.state.cursos;
        var id = -1;
        for(let index in programmings){
            if(programmings[index]['course_id'] == this.props.params.cursoid){
                id = programmings[index]['id'];
                break;
            }
        }
        
        var data = new FormData();
        data.append('file', file);
        data.append('id', id);

        fetch('https://back-ihc.herokuapp.com/api/document/',{
            // headers: h,
            method:'POST',
            body:data
        })
            .then(

                function (response) {
                    return response.json();
                }).then(function (data2) {
                    console.log(data2);
                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
        // this.setState({value: event.target.files[0]});
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }





    
    onClick=(e)=>{
        swal("Enviado correctamente" ,"", "success");
    }
    render(){

        

        return(

            <div class="wrapper pr-1 pl-1">
            <Menu cursos={this.state.cursos} alumnoid={this.props.params.alumnoid}></Menu>
            <div className="container">
            <Navbar alumnoid={this.props.params.alumnoid}></Navbar>
            
            </div>
            </div>


        )



    }
}
export default cursos;