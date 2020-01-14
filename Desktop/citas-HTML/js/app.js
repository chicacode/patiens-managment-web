fetch('http://localhost:5000/pacientes')
    .then(respuesta => respuesta.json())
    .then(datos => mostrarCitas(datos));


    function mostrarCitas(citas){
        const contenedorCitas = document.querySelector('#citas');

        let citasHTML = '';
            citas.forEach(cita =>{
                citasHTML += ` <div className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                            <div className="d-flex w-100 justify-content-between mb-4">
                                <h3  className="mb-3"> ${cita.nombre}</h3>
                                <small className="fecha-alta">
                                    ${cita.fecha} - ${cita.hora}
                                </small>
                            </div>
                            <p className="mb-0">
                                ${cita.sintomas}
                            </p>
                            <div className="contacto py-3">
                                <p>
                                    Dueño: ${cita.propietario}
                                </p>
                                <p>
                                    Teléfono: ${cita.telefono}
                                </p>
                            </div>
                    </div>
                `;
            });

            // Inyectar citas
            contenedorCitas.innerHTML = citasHTML;
    }