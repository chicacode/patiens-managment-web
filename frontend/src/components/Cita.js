import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = (props, { cita } = props) => {
    // console.log("DEsde cita", cita);
    console.log("el nombre de la cita es", props.cita);
    if(!props.cita){
        props.history.push('/');
        return null;
    }

    // extraer por props
    // const { cita: {nombre} } = props; OTRA FORMA DE HACER

    // Eliminar un registro
    const eliminarCita = id => {
        console.log(id);
        clienteAxios.delete(`/pacientes/${id}`)
            .then(respuesta => {
                props.guardarConsulta(true);
                props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
        Swal.fire({
            title: 'Estas seguro?',
            text: "Una cota eliminada no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, elimínala!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                'Deleted!',
                'Tu cita ha sido eliminada.',
                'success'
                )
            }
        })





    }
    return ( 
        <Fragment>
            <h1 className="my-5">Nombre cita: {props.cita.nombre} </h1>

            <div  className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5     d-flex              justify-content-center">
                        <Link to={'/'} className="btn btn-danger text-uppercase py-2 px-5 font-weight-bold">Volver
                        </Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                            <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3  className="mb-3">Nombre: {props.cita.nombre}</h3>
                                        <small className="fecha-alta">
                                            Fecha:  {props.cita.fecha} - Hora: {props.cita.hora}
                                            {console.log("EN citaaa", props.fecha)}
                                        </small>
                                    </div>
                                    <p className="mb-0">
                                        Sintomas: {props.cita.sintomas}
                                    </p>
                                    <div className="contacto py-3">
                                        <p>
                                            Dueño: {props.cita.propietario}
                                        </p>
                                        <p>
                                            Teléfono: {props.cita.telefono}
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <button type="button"
                                            className="text-uppercase py-2 px-5 
                                            font-weight-bold btn btn-danger col"
                                            onClick={ () => eliminarCita(props.cita._id) }
                                        >
                                            Eliminar &times;
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(Cita);