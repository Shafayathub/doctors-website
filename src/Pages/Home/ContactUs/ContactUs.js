import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
  return (
    <section
      className="mt-16 lg:mt-32"
      style={{
        backgroundImage: `url(${appointment})`,
      }}>
      <div className="text-center">
        <h3 className="text-xl font bold text-primary uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl text-white">Services We Provide</h2>
      </div>
      <div className="hero">
        <div className="hero-content">
          <div className="card flex-shrink-0">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="email"
                  placeholder="email address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Message"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
