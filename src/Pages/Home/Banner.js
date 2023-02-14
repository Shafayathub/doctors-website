import React from 'react';
import chair from './../../assets/images/chair.png';
import bg from './../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section
      className="hero bg-base-100 pb-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'left',
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
          <Link to="/appointment">
            <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
