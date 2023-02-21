import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../assets/images/treatment.png';

const DentalCare = () => {
  return (
    <div className="mt-14 hero bg-base-100 lg:px-32">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="lg:max-w-md rounded-lg shadow-2xl"
          alt="Treatment"
        />
        <div className="lg:mx-24">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="/appointment">
            <button className="btn btn-primary bg-gradient-to-l from-primary to-secondary text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
