import React from 'react';
import img from '../assets/img/img.jpg';

const Appointment = ({ appointment }) => {
    const { petName, ownerName, date, time, symptoms } = appointment;
    return (
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap" style={{width: "100px"}} />
                    <div className="card-body">
                        <p className="card-text">
                           <span>Pet: {petName}</span> 
                        </p>
                        <p className="card-text">
                           <span> Owner: {ownerName}</span> 
                        </p>
                        <p className="card-text">
                           <span>Date: {date}</span> 
                        </p>
                        <p className="card-text">
                           <span>Hour: {time}</span> 
                        </p>
                        <p className="card-text">
                           <span> Symptoms: {symptoms}</span> 
                        </p>     
                    </div>
             </div>

            );
}

            export default Appointment;