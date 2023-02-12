import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs/ContactUs';
import DentalCare from './DentalCare';
import InfoCards from './InfoCards';
import MakeAppointment from './MakeAppoinment/MakeAppointment';
import Services from './Services/Services';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
  return (
    <main className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </main>
  );
};

export default Home;
