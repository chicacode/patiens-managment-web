import React, { Fragment, useEffect, useState } from 'react'; // Hooks
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import app from './App.css';

// import cliente de Axios
import clienteAxios from './config/axios';

// Componentes
// import Pacientes from './components/Pacientes';
// import NuevaCita from './components/NuevaCita';
// import Cita from './components/Cita';
import Form from './components/Form';

function App() {

  const [appointmentsList, addAppointments] = useState([]); 
  // const [consultar, guardarConsulta] = useState(true);

  const createAppointment = app => {
    addAppointments([
      ...appointmentsList,
      app
    ])
  }


  // useEffect(() => { // arrow function esto sustituye a los ciclos de vida
  //   
  //   if(consultar){
  //     const consultarAPI = () => {
  //       // esta variable clienteAxios es para no escribir la URL completa
  //       clienteAxios.get('/pacientes')
  //         .then(response => {
  //           // colocar en el State el resultado
  //           guardarCitas(response.data);

  //           // Deshabilitar la consulta
  //           guardarConsulta(false); // deja de ejecutarse el if
  //         })
  //         .catch(error => {
  //           console.log(error);
  //         })
  //     }
  //     consultarAPI(); // Se llama funcion
  //   }
  // }, [consultar] ); 

  return (
    <Fragment>
      <h1>Welcome to Dr. Pets</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="col">2</div>

        </div>

      </div>
    </Fragment>
    // <Router>
    //   <Switch>
    //     <Route 
    //       exact 
    //       path="/" 
    //       component={ () => <Pacientes citas={citas} />}
    //     />
    //     <Route 
    //       exact 
    //       path="/new" 
    //       component={ () =>  <NuevaCita guardarConsulta={guardarConsulta} />} // Para pasar props a componentes
    //     />
    //     <Route 
    //       exact 
    //       path="/cita/:id" 
    //       // render permite poner codigo con callback
    //       render={(props) =>{
    //         // HOF Higher Order Function
    //         console.log(props.match.params.id);
    //         const cita = citas.filter(cita => cita._id === props.match.params.id)

    //         return(
    //           <Cita 
    //           cita={cita[0]} 
    //           guardarConsulta={guardarConsulta}
    //           />
    //         )
    //       }}

    //     />
    //   </Switch>
    // </Router>
  );
}

export default App;
