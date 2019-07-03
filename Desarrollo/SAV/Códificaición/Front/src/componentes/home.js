import React from 'react';
import './home.css'
import Tareasycursos from './tareas-cursos';
import Cursos from './cursos';
import Usuario from './usuario';
import Menu from './menu'
import Navbar from './navbar'
class home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aparecer: true,
            aparecer2: false,
            cursos: []
        };

        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);

    }
    componentWillMount() {
        let currentComponent = this;
        let array = [];
        // let array2=[];
        let i = 0;
        fetch('https://back-ihc.herokuapp.com/api/student?id=' + this.props.params.id)
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
                        cursos: array

                    })

                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }




    onClick = (e) => {
        if (this.state.aparecer) {
            this.setState({
                aparecer: false,
            })
        }



    }
    onClick2 = (e) => {
        if (!this.state.aparecer) {
            this.setState({
                aparecer2: true,
            })
        }



    }

    render() {
        console.log("id :" + this.props.params.id);
        console.log("array" + this.state.cursos);
        return (
            <div class="wrapper pr-1 pl-1">
            <Menu cursos={this.state.cursos} alumnoid={this.props.params.id}></Menu>
            <div class="container">
                <Navbar alumnoid={this.props.params.id}></Navbar>
                <Tareasycursos cursos={this.state.cursos} alumnoid={this.props.params.id} ></Tareasycursos>
            </div>
            
            </div>

            



        )
    }





}
export default home;