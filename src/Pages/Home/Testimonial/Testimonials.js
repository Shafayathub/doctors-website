import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California',
      img: people1,
    },
    {
      _id: 2,
      name: 'Herry Winson',
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California',
      img: people2,
    },
    {
      _id: 3,
      name: 'Winson Herry',
      review:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      location: 'California',
      img: people3,
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font bold text-primary uppercase">
            Testimonial
          </h3>
          <h2 className="text-3xl">What our Patient says</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="Quote" />
        </figure>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((testimonial) => (
          <Testimonial
            key={testimonial._id}
            testimonial={testimonial}></Testimonial>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
