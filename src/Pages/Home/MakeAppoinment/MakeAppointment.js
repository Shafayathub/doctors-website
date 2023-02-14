import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
  return (
    <section
      className="mt-16 lg:mt-32 lg:h-[480px]"
      style={{
        backgroundImage: `url(${appointment})`,
      }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl"
            alt="Appoinment"
          />
          <div>
            <h3 className="text-xl font bold text-secondary uppercase">
              Appoinment
            </h3>
            <h2 className="text-4xl text-white">Make an Appoinment Today</h2>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Link to="/appointment">
              <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
                Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
