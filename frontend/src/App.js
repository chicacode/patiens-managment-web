import React, { Fragment, useEffect, useState } from 'react';
import appStyle from './app.css';
import Appointment from './components/Appointment';
import Form from './components/Form';
import InputForm from './components/InputForm';
import BudgetForm from './components/BudgetForm';
import ControlBudget from './components/ControlBudget';

function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // const [appointmentsList, addAppointments] = useState([]); before
  const [appointmentsList, addAppointments] = useState(initialAppointments); // after lStorage
 
  const [budget, setnewBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [exp, saveExp] = useState({})
  const [createExp, saveCreateExp] = useState(false)

  // useEffect que actualiza el restante
  useEffect(
    () => {
        if (createExp)  {
          saveExpenses([
                ...expenses, exp
            ]);
            const presResto = parseInt(remaining) - parseInt(exp.quantity);
            setRemaining(presResto);
            saveCreateExp(false);
        }
    }, [createExp, exp, expenses, remaining] // Las variables que utilizamos son dependencias
);

 
    useEffect(() => {
      if (initialAppointments) {
        localStorage.setItem('appointments', JSON.stringify(appointmentsList));
      } else {
        localStorage.setItem('appointments', JSON.stringify([]));
      }
    }, [appointmentsList, initialAppointments]);

    // To execute just once pass it an empty array 
    // listen the change that happens in App didMoun didUpdate

    const createAppointment = app => {
      addAppointments([
        ...appointmentsList,
        app
      ])
    }



    const deleteAppointment = id => {
      const newAppointments = appointmentsList.filter(apo => apo.id !== id); //return a new array
      addAppointments(newAppointments);
    }

    const title = appointmentsList.length === 0 ? 'No appointments' : 'Manage Appointments';

    return (
      <Fragment>
        <h1 className="p-5 ">Welcome to Dr. Pets</h1>
        <div className="container mt-5">
          <div className="row appStyle">
            <div className="col">
              <Form
                createAppointment={createAppointment}
              />
            </div>
            <div className="col">
              <h2 className="text-center">{title}</h2>
              {appointmentsList.map(appointment => (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                  deleteAppointment={deleteAppointment}
                />
              ))}

            </div>
          </div>
        </div>

        <div className="contenido-principal contenido">
          {/* carga condicional de componente */}
          {showQuestion ? (
            <InputForm
              setnewBudget={setnewBudget}
              setRemaining={setRemaining}
              updateQuestion={updateQuestion}
            />
          )
            : (
              <div className="row">
                <div className="one-half column">
                  <BudgetForm
                    saveExp={saveExp}
                    saveCreateExp={saveCreateExp}
                  />
                </div>
                <div className="one-half column">
                  <ControlBudget
                    budget={budget}
                    remaining={remaining}
                  />
                </div>
              </div>
            )
          }

        </div>
      </Fragment>
    );
  }

  export default App;
