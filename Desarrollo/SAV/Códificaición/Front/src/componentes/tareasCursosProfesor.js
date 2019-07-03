import React from 'react';

class tareasCursosProfesor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log("CURSOS RESPONSE: " + this.props.courses);
        return (
            <div className="container">
                <h3>{this.props.cursos.course}</h3>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="panel-group" id="accordion">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h6 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">HOY</a>
                                            </h6>
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

export default tareasCursosProfesor;