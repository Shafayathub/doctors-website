import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
  const handleContactUs = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;
    const contactUs = {
      email,
      subject,
      message,
    };
    console.log(contactUs);
    form.reset();
  };
  return (
    <section
      className="mt-16 lg:mt-32 p-10 sm:p-5"
      style={{
        backgroundImage: `url(${appointment})`,
      }}>
      <div className="text-center">
        <h3 className="text-xl font bold text-secondary">Contact Us</h3>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="hero">
        <div className="hero-content">
          <div className="card flex-shrink-0">
            <form onSubmit={handleContactUs} className="card-body p-0">
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  placeholder="Message"
                  name="message"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  required></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
