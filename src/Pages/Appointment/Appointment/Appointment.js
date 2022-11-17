import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppintment from '../AvailableAppintment/AvailableAppintment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppintment
            selectedDate={selectedDate}
            ></AvailableAppintment>
        </div>
    );
};

export default Appointment;