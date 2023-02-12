import React from 'react';
import clock from '../../assets/icons/clock.svg';
import markar from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import Infocard from './Infocard';

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: 'Opening Hours',
      description: '9:00 am - 5:00 pm Everyday, Friday closed',
      icon: clock,
      bgClass: 'bg-gradient-to-l from-primary to-secondary',
    },
    {
      id: 2,
      name: 'Visit our location',
      description: 'Brooklyn, NY 10036, United States',
      icon: markar,
      bgClass: 'bg-accent',
    },
    {
      id: 3,
      name: 'Contact us now',
      description: '+000 123 456789',
      icon: phone,
      bgClass: 'bg-gradient-to-l from-primary to-secondary',
    },
  ];
  return (
    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <Infocard key={card.id} card={card}></Infocard>
      ))}
    </div>
  );
};

export default InfoCards;
