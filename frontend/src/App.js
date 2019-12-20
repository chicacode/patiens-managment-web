import React, { useEffect, useState } from 'react';
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

  // Si cambia alguna dependencia se ejecuta el useEffect
  // Esta funcion se ejecuta automaticamente cuando se carga la App
  // o cuando realiza algun cambio
  useEffect(() => { // arrow function esto sustituye a los ciclos de vida
    
    return () => {
      
    };
  }, [])

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/" 
          component={Pacientes}
        />
        <Route 
          exact 
          path="/new" 
          component={NuevaCita}
        />
        <Route 
          exact 
          path="/cita/:id" 
          component={Cita}
        />
      </Switch>
    </Router>
  );
}

export default App;
