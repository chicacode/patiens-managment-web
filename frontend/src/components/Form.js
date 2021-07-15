import React, { Fragment, useState } from 'react';

const Form = () => {

    // Hooks: create state
    const [appointment, setAppointment]= useState({
        petName: '',
        ownerName: '',
        date: '',
        time: '',
        symptoms: '',
    })


    return (
        <Fragment>
            <h2>Make an Appointment</h2>
            
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="petName">Pet Name</label>
                        <input 
                            type="text" 
                            className="form-control p-3" 
                            name="petName" 
                            placeholder="Name" 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input type="text" 
                            className="form-control p-3" 
                            name="ownerName" 
                            placeholder="Owner" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="date" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Hour</label>
                        <input 
                            type="time" 
                            className="form-control p-3" 
                            name="time" 
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
                             />
                        </div>
                       
                    </div>
                    <button type="submit" className="btn btn-primary mt-5">Add Appointment</button>
                </div>
       
                


        </Fragment>
    );
}

export default Form;