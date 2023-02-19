import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, availableSlots } = appointmentOption;
  return (
    <div className="card w-72 lg:w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body text-center">
        <h2 className="text-xl font-semibold text-secondary">{name}</h2>
        <p>
          {availableSlots.length > 0 ? availableSlots[0] : 'Try another day'}
        </p>
        <p>
          {availableSlots.length}{' '}
          {availableSlots.length > 1 ? 'Spaces' : 'Space'} Available
        </p>
        <div className="card-actions justify-center">
          {/* The button to open modal */}
          <label
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
