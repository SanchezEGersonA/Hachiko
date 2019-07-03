
import React from 'react';
import { browserHistory } from 'react-router-3';
import './tareas-cursos.css'

class tareasyCursos extends React.Component{

  constructor(props){
    super(props);
    this.state={
        card:true,
           };
    
    this.onClick= this.onClick.bind(this);
    this.onClick2=this.onClick2.bind(this);
    this.onClick2= this.onClick2.bind(this);

}


onClick=(e)=>{
  if(this.state.card){
      this.setState({
          card:false,
      })
  }
  

} 

onClick2=(e)=>{
    browserHistory.push('/curso/'+e+'/'+this.props.alumnoid)
}
funcion(i){
  if(i==0){
      return "show";
  }
  else return "";
}


}

export default tareasyCursos;