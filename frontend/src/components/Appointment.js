import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import dogImg from '../assets/img/img.jpg';

const Appointment = ({ appointment, deleteAppointment }) => {
    const { petName, ownerName, date, time, symptoms } = appointment;
    return (
        <Fragment>
            <div className="card justify-content-center" style={{ width: "50rem", border: '1px solid black', borderRadius: "10px!important" }}>
                <img className="card-img-top p-4" src={dogImg} alt="Card image cap" style={{ width: "180px" }} />
                <div className="card-body">
                    <p className="card-text p-1">
                        <span>Pet: {petName}</span>
                    </p>
                    <p className="card-text p-1">
                        <span> Owner: {ownerName}</span>
                    </p>
                    <p className="card-text p-1">
                        <span>Date: {date}</span>
                    </p>
                    <p className="card-text p-1">
                        <span>Hour: {time}</span>
                    </p>
                    <p className="card-text p-1">
                        <span> Symptoms: {symptoms}</span>
                    </p>
                </div>
                <button 
                className="btn btn-primary p-2 m-4"
                onClick={() => deleteAppointment(appointment.id)}
                >
                    Delete Appointment &times;</button>

            </div>
            <br />
        </Fragment>
    );
}

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

export default Appointment;