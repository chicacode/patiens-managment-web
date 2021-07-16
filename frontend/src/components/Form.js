import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({createAppointment}) => {

    // Hooks: create state
    const [appointment, setAppointment] = useState({
        petName: '',
        ownerName: '',
        date: '',
        time: '',
        symptoms: ''
    })

    // Hook: 2n state to Validate
    const [error, setError] = useState(false);

    const handleChange = e => {
        // appointment.petName = e.target.value /* i cannot do this. It's not how react works*/
        // I dot it through the set method
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    // get / extract values / destructured state
    const { petName, ownerName, date, time, symptoms } = appointment;

    const submitAppointment = e => {
        e.preventDefault();

        // Validate
        if ( petName.trim() ==='' || ownerName.trim() === '' || date.trim() ==='' || time.trim() ==='' || symptoms.trim() === '') {

            setError(true);
            return; //ver que pasa con este return
        }else{
            
        }

        setError(false);

       appointment.id = uuidv4();

       // Create apointment
       createAppointment(appointment);
       console.log(appointment);

       // Restart form
       setAppointment({
        petName: '',
        ownerName: '',
        date: '',
        time: '',
        symptoms: ''
       })

    }
    return (
        <Fragment>
            <h2 className="text-center">Make an Appointment</h2>
         
            {error ? <div className="alert alert-danger" role="alert">
                         All inputs are required: alert—check it out!
                     </div> 
                     : null }
        
            <form
                onSubmit={submitAppointment}
              >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="petName">Pet Name</label>
                        <input
                            type="text"
                            className="form-control p-3"
                            name="petName"
                            placeholder="Name"
                            onChange={handleChange}
                            value={petName}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input type="text"
                            className="form-control p-3"
                            name="ownerName"
                            placeholder="Owner"
                            onChange={handleChange}
                            value={ownerName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            onChange={handleChange}
                            value={date}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Hour</label>
                        <input
                            type="time"
                            className="form-control p-3"
                            name="time"
                            onChange={handleChange}
                            value={time}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="symptoms">Symptoms</label>
                            <textarea
                                type="text"
                                className="form-control p-3"
                                aria-label="With textarea"
                                name="symptoms"
                                onChange={handleChange}
                                value={symptoms}
                            />
                        </div>

                    </div>
                    <button type="submit" className="btn btn-success mt-5">Add Appointment</button>
                </div>
            </form>
        </Fragment>
    );
}

export default Form;