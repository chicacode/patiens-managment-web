import React, { Fragment, useEffect, useState } from 'react'; // Hooks
import appStyle from './App.css';



import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {

  const initialAppointments = JSON.parse(localStorage.getItem('citas'));
  if(!initialAppointments){
    initialAppointments = [];
  }

  // const [appointmentsList, addAppointments] = useState([]); before
  const [appointmentsList, addAppointments] = useState(initialAppointments); // after
  // Realiza ciertas operaciones cuando el state cambia
  useEffect( () => {
   
  }, [appointmentsList]); 

  // Para que se ejecute una vez hay que pasarle un array vacio 
  // esta pediente de los cambios que sucede en la App didMoun didUpdate

  const createAppointment = app => {
    addAppointments([
      ...appointmentsList,
      app
    ])
  }

  const deleteAppointment = id =>{
    const newAppointments = appointmentsList.filter(apo => apo.id !== id); //return a new array
    addAppointments(newAppointments);
  }

  const title = appointmentsList.length === 0 ? 'No appointments' : 'Manage Appointments';
  

  return (
    <Fragment>
      <h1 className="p-5">Welcome to Dr. Pets</h1>
      <div className="container mt-5">
        <div className="row appStyle">
          <div className="col">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="col">
            <h2 className="text-center">{title}</h2>
             {appointmentsList.map( appointment => (
               <Appointment 
                 key={appointment.id}
                 appointment={appointment}
                 deleteAppointment={deleteAppointment}
               />
             ))}
        
          </div>

        </div>

      </div>
    </Fragment>
  );
}

export default App;
