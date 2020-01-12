import React, { useEffect, useState } from 'react'; // Hooks
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import cliente de Axios
import clienteAxios from './config/axios';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // State de la App - ARRAY destructuring
  const [citas, guardarCitas] = useState([]); // valor inicial de arreglo vacio
  const [consultar, guardarConsulta] = useState(true);

  // Si cambia alguna dependencia se ejecuta el useEffect
  // Esta funcion se ejecuta automaticamente cuando se carga la App
  // o cuando realiza algun cambio
  useEffect(() => { // arrow function esto sustituye a los ciclos de vida
    // Buen lugar para consumir APIS
    if(consultar){
      const consultarAPI = () => {
        // esta variable clienteAxios es para no escribir la URL completa
        clienteAxios.get('/pacientes')
          .then(response => {
            // colocar en el State el resultado
            guardarCitas(response.data);

            // Deshabilitar la consulta
            guardarConsulta(false); // deja de ejecutarse el if
          })
          .catch(error => {
            console.log(error);
          })
      }
      consultarAPI(); // Se llama funcion
    }
  }, [consultar] ); // Es para que React este atento a los cambios
  // cada vez que cambie que se ejecute de nuevo

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/" 
          component={ () => <Pacientes citas={citas} />}
        />
        <Route 
          exact 
          path="/new" 
          component={ () =>  <NuevaCita guardarConsulta={guardarConsulta} />} // Para pasar props a componentes
        />
        <Route 
          exact 
          path="/cita/:id" 
          // render permite poner codigo con callback
          render={(props) =>{
            // HOF Higher Order Function
            console.log(props.match.params.id);
            const cita = citas.filter(cita => cita._id === props.match.params.id)
          
            return(
              <Cita 
              cita={cita[0]} 
              guardarConsulta={guardarConsulta}
              />
            )
          }}
          
        />
      </Switch>
    </Router>
  );
}

export default App;
