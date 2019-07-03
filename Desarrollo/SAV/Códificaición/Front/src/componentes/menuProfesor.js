import React from 'react';
import Calendar from 'react-calendar';
import './menu.css'

class menuProfesor extends React.Component {

    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="">
                <nav id="sidebar">
                    <div className="sidebar-header pb-2 pt-2">
                        <img className="imagen" src="http://sistemas.unmsm.edu.pe/assets/fisi/img/logo/logo-fisi-header-2.png" />
                    </div>

                    <ul className="list-unstyled components">
                        <p>#HachikoNight</p>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Mis cursos</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href={"/cursop/" + this.props.cursos.courseId + "/" + this.props.cursos.teacherId}>{this.props.cursos.course}</a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#">Acerca de</a>
                        </li>

                        <li>
                            <a href="#">Contactenos</a>
                        </li>
                    </ul>

                    <div className="calendario m-1">
                        <Calendar onChange={this.onChange} value={this.state.date} />
                    </div>
                </nav>
            </div>
        )
    }

}

export default menuProfesor;