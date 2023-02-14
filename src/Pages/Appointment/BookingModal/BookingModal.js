import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { slots, name } = treatment;
  const date = format(selectedDate, 'PP');
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const patientName = form.name.value;
    const email = form.email.value;
    const selectedSlot = form.selectedSlot.value;
    const phone = form.phone.value;
    const bookingData = {
      appointmentDate: date,
      slot: selectedSlot,
      treatment: name,
      patientName,
      email,
      phone,
    };
    console.log(bookingData);

    // To Close the Modal
    setTreatment(null);
  };
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
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email(optional)"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="phone number"
              className="input input-bordered w-full"
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
