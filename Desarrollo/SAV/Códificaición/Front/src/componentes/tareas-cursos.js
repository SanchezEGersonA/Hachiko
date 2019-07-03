
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
    //this.onClick2= this.onClick2.bind(this);

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

render(){
  console.log("hola: "+this.props.cursos)
    return(
        
        <div className="container">      
        <h3 className="mt-3 mb-0 fuentes_titulos">Tareas Pendientes</h3>
        <h6 className="mt-0 mb-0 pt-0 mb-4">¿que tienes para hoy?</h6>
        <div className="row">
                   <div className="col-6">
                       <div class="card sombras_" >
                           <div class="card-body">
                              
                              <div class="panel-group" id="accordion">
     <div class="panel panel-default">
       <div class="panel-heading">
         <h6 class="panel-title">
           <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
           HOY</a>
         </h6>
       </div>
       <div id="collapse1" class="panel-collapse collapse show">
         <div class="panel-body">
         <div class="list-group-flush">
   
     <a href="#" class="list-group-item list-group-item-action" >Presentacion de proyecto</a>
     <a href="#" class="list-group-item list-group-item-action" onClick={this.onClick}>Entrega de Tarea IHC</a>
     <a href="#" class="list-group-item list-group-item-action">Exposicion</a>
     <a href="#" class="list-group-item list-group-item-action disabled">Entrega de Tarea Calculo</a>
   </div>
   
         </div>
       </div>
     </div>
     <div class="panel panel-default">
       <div class="panel-heading">
         <h6 class="panel-title">
           <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
           MAÑANA</a>
         </h6>
       </div>
       <div id="collapse2" class="panel-collapse collapse">
         <div class="panel-body">----</div>
       </div>
     </div>
     <div class="panel panel-default">
       <div class="panel-heading">
         <h6 class="panel-title">
           <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
           PROXIMAMENTE</a>
         </h6>
       </div>
       <div id="collapse3" class="panel-collapse collapse">
         <div class="panel-body">Examen Parcial</div>
       </div>
     </div>
   </div>
                               
                           
                           
                           </div>
                       </div>
                   </div>
           
                   <div className="col-6">
                       {this.state.card?(
                       <div class="card estilo_ estilo_text sombras_" >
                           <div class="card-body d-flex">
                               <h5 class="card-title justify-content-center align-self-center">No ha seleccionado una tarea</h5>
                               {/* <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <a href="#" class="card-link">Card link</a>
                               <a href="#" class="card-link">Another link</a> */}
                           </div>
                       </div>
                       ):(
                        <div class="card estilo_ sombras_" >
                        <div class="card-body">
                            <h5 class="card-title">Entrega de Tarea IHC</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Yañez Duran, Carlos</h6>
                            <p class="card-text">Segunda entrega del proyecto de curso que contiene lo prototipos de medio y alto nivel</p>
                            <h6 class="card-subtitle mb-2 text-muted texto-color">fecha maxima de entrega: 30/05/19 </h6>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                      </div>
                       )
                       }
                   </div>
           </div>
   
       <h3 className="mt-3 mb-0">Cursos de hoy</h3>
       <h6 className="mt-0 mb-0 pt-0 mb-4">¿que te toca hoy?</h6>
       <div className="row">
                   
                   <div className="col-12">
                   <div id="accordion">

      {
        this.props.cursos.map((curso,i)=>{
          return(
            <div class="card sombras_ mb-2">
            <div class="card-header" id={"headingn"+i} >
              <h5 class="mb-0">
                <button  class="btn btn-link" data-toggle="collapse"  data-target={"#collapsen"+i} aria-expanded="true" aria-controls={"collapsen"+i} >
                    {curso.curso}
                </button>
              </h5>
            </div>
        
            <div id={"collapsen"+i}  class={"collapse "+this.funcion(i)} aria-labelledby={"headingn"+i} data-parent="#accordion">
              <div class="card-body">
              <h6>Informacion del curso</h6>
                 <div className="row ml-5">
                            <div className="col-12">
                                 <h6 className="text-secondary">{curso.nprofesor+","+ curso.aprofesor}</h6> 
 
                                 <h6 className="text-secondary">Horario: 9:00-11:00 am</h6> 
                                 
                                 <h6 className="text-secondary">{"Creditos: "+curso.creditos}</h6>
                                 <h6 className="text-secondary">{"Salon: "+curso.salon}</h6>
 
                                 <a  href={'/curso/'+curso.id+'/'+this.props.alumnoid} class="btn  btn-small color-boton" >ver mas</a>
 
                            </div>
                 </div>                  
              </div>
            </div>
          </div>
          
          )
        })
      }               
    
     
     
     
   </div>
   
   
   </div>
       </div>
       
              
               
              
       </div>
               
               








    )
}

}

export default tareasyCursos;