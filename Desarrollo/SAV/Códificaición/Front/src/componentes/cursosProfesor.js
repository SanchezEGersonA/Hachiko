import React from 'react';
import './cursos.css';
import swal from 'sweetalert';
import MenuProfesor from './menuProfesor'
import NavBarProfesor from './navbarProfesor'

class cursosProfesor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aparecer: true,
            aparecer2: false,
            cursos: [],
            curso_i: '',
            pnombre: '',
            papellido: '',
        };

        this.onClick = this.onClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                jsonCourse["name"] = data.name;
                jsonCourse["surname"] = data.surname;
                jsonCourse["classroom"] = data.programmings.classroom;
                jsonCourse["course"] = data.programmings.courses[0].name;
                jsonCourse["courseCycle"] = data.programmings.courses[0].cycle;
                jsonCourse["courseCredit"] = data.programmings.courses[0].credit;
                jsonCourse["documents"] = data.programmings.courses[0].name;
                jsonCourse["documentId"] = data.programmings.documents[0].id;
                console.log("jsonCourse: " + jsonCourse);
                currentComponent.setState({
                    cursos: jsonCourse
                });
            })
            .catch(function (error) {
                console.log('[ERROR]', error);
            })

        fetch('https://back-ihc.herokuapp.com/api/course?id=' + this.props.params.cursoid)
            .then(

                function (response) {
                    return response.json();
                })
            .then(function (data2) {
                currentComponent.setState({
                    pnombre: data2.programming.teachers[0].name,
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
        var data = new FormData();
        data.append('file', file);
        data.append('id', this.props.params.cursoid);

        fetch('http://localhost:8000/api/document/', {
            method: 'POST',
            body: data
        })

            .then(
                function (response) {
                    return response.json();
                })
            .then(function (data2) {
                console.log(data2);
            })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    onClick = (e) => {
        swal("Enviado correctamente", "", "success");
    }

    render() {

        return (
            <div className="wrapper pr-1 pl-1">
                <MenuProfesor cursos={this.state.cursos} teacherId={this.state.cursos.id} />
                <div className="container">
                    <NavBarProfesor teacherId={this.state.cursos.id} />
                    <div className="row m-1">
                        <div className="col-12 ">
                            <h3>{this.state.curso_i}</h3>
                            <h6>{this.state.papellido + " " + this.state.pnombre}</h6>
                        </div>
                    </div>
                    <div className="row m-2 fondocurso">
                        <div className="col-12">
                            <p className="fuente-tamano">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue sapien ut faucibus rutrum. Cras semper pharetra libero quis laoreet. Sed eu consequat lectus, nec suscipit urna.</p>
                            <a href="https://www.unapiquitos.edu.pe/contenido/noticias/descargas/Formato-de-Silabo-UNAP2.pdf" target="_blank"><i class="far fa-file-pdf iconopdf"></i> Sylabus</a>
                        </div>
                        <div className="col-12 mt-3">
                            <h5>Recursos</h5>
                            <div className="row mb-4">
                                <div className="col-12 pl-5 pr-5">
                                    <div id="accordion">
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        <h6>Semana 1: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 2: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 3: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 4: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 5: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 6: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 7: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ccard sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 8: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 9: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 10: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 11: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 12: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 13: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 14: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 15: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card sombras_ mb-2">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <h6>Semana 16: TEMA</h6>
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <a href="https://www.fceia.unr.edu.ar/ingsoft/testing-intro-a.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 1</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <a href="http://oa.upm.es/40012/1/PFC_JOSE_MANUEL_SANCHEZ_PENO_3.pdf" target="_blank"><i class="fas fa-file iconoArchivo"></i> Documento 2</a>
                                                        </div>
                                                        <div className="col-12">
                                                            <form onSubmit={this.handleSubmit} enctype="multipart/form-data">
                                                                <h6>Tarea: descripcion de la tarea</h6>
                                                                <div className="form-group mb-0">
                                                                    <label for="ejemplo_archivo_1"><i class="fas fa-file-upload iconoSubida">  </i></label>
                                                                    <input type="file" value={this.state.value} onChange={this.handleChange} id="ejemplo_archivo_1" />
                                                                </div>
                                                                <button type="submit" class="btn  btn-small color-boton" onClick={this.onClick}>
                                                                    Publicar
                                                                </button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default cursosProfesor;