import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
  }
  return (
    <section
      className="hero bg-base-200"
      style={{
        background: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundPositionX: 'left',
      }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}></DayPicker>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
