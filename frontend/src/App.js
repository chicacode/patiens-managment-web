import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  // codigo JS - variables de entorno
  console.log(process.env.REACT_APP_BACKEND_URL);
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
