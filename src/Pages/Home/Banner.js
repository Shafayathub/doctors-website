import React from 'react';
import chair from './../../assets/images/chair.png';
import bg from './../../assets/images/bg.png';

const Banner = () => {
  return (
    <section
      className="hero bg-base-200 pb-10"
      style={{
        backgroundImage: `url(${bg})`,
      }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          alt="Doctors Portal"
          className="lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
