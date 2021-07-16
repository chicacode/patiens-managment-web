import React, { Fragment, useState } from 'react'; // Hooks
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import appStyle from './App.css';

// import cliente de Axios
//import clienteAxios from './config/axios';

// Componentes
import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {

  const [appointmentsList, addAppointments] = useState([]); 

  const createAppointment = app => {
    addAppointments([
      ...appointmentsList,
      app
    ])
  }

  return (
    <Fragment>
      <h1>Welcome to Dr. Pets</h1>
      <div className="container">
        <div className="row appStyle">
          <div className="col">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="col">
            <h2>Manage Appointments</h2>
             {appointmentsList.map( appointment => (
               <Appointment 
                 key={appointment.id}
                 appointment={appointment}
               />
             ))}
          </div>

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
