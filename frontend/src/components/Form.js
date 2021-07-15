import React, { Fragment } from 'react';

const Form = () => {
    return (
        <Fragment>
            <h2>Make an Appointment</h2>
            
                <div classNameName="form-row">
                    <div className="form-group col-md-6">
                        <label for="petName">Pet Name</label>
                        <input 
                            type="text" 
                            className="form-control p-3" 
                            name="petName" 
                            placeholder="Name" 
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="ownerName">Owner Name</label>
                        <input type="text" 
                            className="form-control p-3" 
                            name="ownerName" 
                            placeholder="Owner" 
                        />
                    </div>
                    <div className="form-group">
                        <label for="date">Date</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            name="date" 
                        />
                    </div>
                    <div className="form-group">
                        <label for="time">Hour</label>
                        <input 
                            type="time" 
                            className="form-control p-3" 
                            name="time" 
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="symptoms">Symptoms</label>
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