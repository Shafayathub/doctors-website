import React from 'react';

const Testimonial = ({ testimonial }) => {
  const { name, location, img, review } = testimonial;
  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl  mx-auto">
      <div className="card-body">
        <p>{review}</p>
        <div className=" mt-10 flex items-center gap-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt={name} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <h4>{location}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
