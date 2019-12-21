import React, { Fragment } from 'react';

//sfc
const Pacientes = (props) => {
    if(props.citas.length === 0) return null;

    return ( 
        <Fragment>
            <h1 className="my-5">Administrador de Pacientes</h1>

            <div  className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <a href="#" className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita
                        </a>
                    </div>
                </div>
            </div>
        </Fragment> );
} 

export default Pacientes;