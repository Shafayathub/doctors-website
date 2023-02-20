import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import Loading from '../Shared/Loading';

const Dashboard = () => {
  const [appointments, setAppoinments] = useState([]);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    fetch(`http://localhost:5000/booking?patient=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
  }, [user.email]);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="mt-5 mx-5">
      <h1 className="text-center text-primary text-xl font-semibold mb-3">
        My Appointments
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row  --> */}
            {appointments.map((appointment, index) => (
              <tr className="hover">
                <th>{index + 1}</th>
                <td>{appointment?.patientName}</td>
                <td>{appointment?.treatment}</td>
                <td>{appointment?.appointmentDate}</td>
                <td>{appointment?.slot}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Sl.</th>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
