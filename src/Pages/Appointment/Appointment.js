import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <main className="mx-5">
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}></AppointmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}></AvailableAppointments>
    </main>
  );
};

export default Appoinment;
