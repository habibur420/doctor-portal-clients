import React from 'react';

const AppointmentOption = ({ appointmentOption , setTreatment}) => {
    const { name, slots } = appointmentOption;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body text-center ">
                    <h2 className="text-2xl font-bold  text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                    <div className="card-actions justify-center">
                        <label  onClick={() =>  setTreatment(appointmentOption)} htmlFor="booking-modal" disabled={slots.length === 0} className="btn btn-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;