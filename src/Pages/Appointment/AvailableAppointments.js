import { format } from 'date-fns';
import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
  // Using React Query for convenience

  // const [appointmentOptions, setAppoinmentOptions] = useState([]);
  // useEffect(() => {
  //   fetch(`https://server-doctors-website.onrender.com/available?date=${date}`)
  //     .then((res) => res.json())
  //     .then((data) => setAppoinmentOptions(data));
  // }, [date]);

  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP');
  const {
    data: appointmentOptions,
    isLoading,
    refetch,
  } = useQuery(['available', date], () =>
    fetch(
      `https://server-doctors-website.onrender.com/available?date=${date}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section className="mt-5 lg:mt-16">
      <p className="text-center text-secondary text-xl font-semibold">
        Available Appointments on {format(selectedDate, 'PP')}
      </p>
      <p className="text-center text-xs font-medium">
        Please Select a Service.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {appointmentOptions?.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
            treatment={treatment}></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selectedDate={selectedDate}
          refetch={refetch}></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
