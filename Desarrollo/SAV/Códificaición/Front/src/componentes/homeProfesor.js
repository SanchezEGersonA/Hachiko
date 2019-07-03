import React from 'react';
import TareasCursosProfesor from './tareasCursosProfesor';
import MenuProfesor from './menuProfesor';
import NavBarProfesor from './navbarProfesor';

class homeProfesor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cursos: {}
    }
  }

  componentWillMount() {

    let currentComponent = this;
    let jsonCourse = {};
    fetch('https://back-ihc.herokuapp.com/api/teacher?id=' + this.props.params.id)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        jsonCourse["id"] = data.programmings.id;
        jsonCourse["teacherId"] = data.programmings.teacher_id;
        jsonCourse["hours"] = data.programmings.hour;
        jsonCourse["classroom"] = data.programmings.classroom;
        jsonCourse["courseId"] = data.programmings.course_id;
        jsonCourse["course"] = data.programmings.courses[0].name;
        jsonCourse["courseCycle"] = data.programmings.courses[0].cycle;
        jsonCourse["courseCredit"] = data.programmings.courses[0].credit;
        jsonCourse["documents"] = data.programmings.courses[0].name;
        jsonCourse["documentId"] = data.programmings.documents[0].id;
        jsonCourse["documentLink"] = data.programmings.documents[0].link;
        console.log("jsonCourse: " + jsonCourse);
        currentComponent.setState({
          cursos: jsonCourse
        });
      })
      .catch(function (error) {
        console.log('[ERROR]', error);
      })

  }

  render() {
    return (
      <div className="wrapper pr-1 pl-1">
        <MenuProfesor cursos={this.state.cursos} />
        <div className="container">
          <NavBarProfesor teacherId={this.props.params.id}/>
          <TareasCursosProfesor cursos={this.state.cursos}/>
        </div>
      </div>
    )
  }

}

export default homeProfesor;
