import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.config';
import Loading from '../../Shared/Loading';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const [user, loading] = useAuthState(auth);
  const { _id, slots, name } = treatment;
  const date = format(selectedDate, 'PP');
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const selectedSlot = form.selectedSlot.value;
    const phone = form.phone.value;
    const bookingData = {
      appoinmentId: _id,
      appointmentDate: date,
      slot: selectedSlot,
      treatment: name,
      patientName,
      email,
      phone,
    };

    fetch('https://server-doctors-website.onrender.com/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(`Booking succesfull on ${date} at ${selectedSlot}`);
        } else {
          toast.error(
            `Already have one on ${data.booking?.appointmentDate} at ${data.booking?.slot}`
          );
        }
        // Update slots
        refetch();
        // To Close the Modal
        setTreatment(null);
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">
            {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available
          </p>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6">
            <input
              name="email"
              type="email"
              disabled
              value={user?.email || ' '}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full"
            />
            <select
              name="selectedSlot"
              className="select select-bordered w-full">
              {slots.length > 0 ? (
                slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))
              ) : (
                <option disabled>No Available Slot</option>
              )}
            </select>

            <input
              name="name"
              type="text"
              placeholder="Patient Name"
              className="input input-bordered w-full"
              required
            />

            <input
              name="phone"
              type="text"
              placeholder="phone number"
              className="input input-bordered w-full"
              required
            />
            {
              <input
                disabled={slots.length < 1}
                type="submit"
                value="Submit"
                className="btn btn-accent w-full"
              />
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
