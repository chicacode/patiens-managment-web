import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Import Axios
import clienteAxios from '../config/axios';

const NuevaCita = (props) => {
    // escribir code JS
    // Generar State como objeto

    const [cita, guardarCita] = useState({
        // debe ser definido igual que en el model-schema
        nombre: '',
        propietario: '',
        fecha:'',
        hora:'',
        telefono:'',
        sintomas:''
    })
    // Funcion que lee datos del form
    // Lee lo que el usuario escribe y lo actualiza en el State
    const actualizarState = e => {
        // e.target.name; EN QUE CAMPO ESTA ESCRIBIENDO
        // e.target.value; QUE VALOR - CONTENIDO ESTA ESCRIBIENDO
        guardarCita({
            ...cita, // hace una copia actual de lo que hay en el state y reescribe lo que el usuario escribe
            [e.target.name] : e.target.value
        })
    }

    // Enviar petición a la API
    const crearNuevaCita = e => {
        e.preventDefault();

        // Enviar peticion por Axios
        clienteAxios.post('/pacientes', cita) // axios se pasan 2 parametros la url que se apunta y el contenido que se quire agregar
            .then(response =>{
                console.log(response);

                props.guardarConsulta(true);

                // Redireccionar al component principal App
                props.history.push('/')

            })

    }
    return ( 
        <Fragment>
            <h1 className="my-5">Crear nueva cita</h1>
            <div  className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5     d-flex              justify-content-center">
                        <Link to={'/'} className="btn btn-danger text-uppercase py-2 px-5 font-weight-bold">Volver
                        </Link>
                    </div>
                    <div className="col-md-8 mx-auto">  
                    <form onSubmit={crearNuevaCita} className="bg-white p-5 bordered">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre Mascota</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Nombre Mascota" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="propietario">Nombre Propietario</label>
                            <input 
                                type="text" 
                                className="form-control form-control-lg" 
                                id="propietario" 
                                name="propietario" 
                                placeholder="Nombre Propietario" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefono">Teléfono</label>
                            <input 
                                type="tel" 
                                className="form-control form-control-lg" 
                                id="telefono" 
                                name="telefono" 
                                placeholder="Teléfono" 
                                onChange={actualizarState}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fecha">Fecha Alta</label>
                            <input 
                                type="date" 
                                className="form-control form-control-lg" 
                                id="fecha" 
                                name="fecha" 
                                onChange={actualizarState} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hora">Hora Alta</label>
                            <input 
                                type="time" 
                                className="form-control form-control-lg" 
                                id="hora" 
                                name="hora" 
                                onChange={actualizarState} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="sintomas">Síntomas</label>
                            <textarea 
                                className="form-control" 
                                name="sintomas" 
                                rows="6"
                                onChange={actualizarState}
                            ></textarea>
                        </div>

                        <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                    </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
// withRouter es para que no se pierdan las props 
export default withRouter(NuevaCita);