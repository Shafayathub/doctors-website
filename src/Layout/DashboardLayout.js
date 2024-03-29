import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { MdDashboardCustomize } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';

const DashboardLayout = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <>
      <div className="navbar sticky top-0 z-10">
        <Navbar></Navbar>
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button lg:hidden">
          <MdDashboardCustomize className="w-6 h-6"></MdDashboardCustomize>
        </label>
      </div>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h1 className="text-center text-secondary text-3xl font-bold">
            Welcome to your Dashboard
          </h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side shadow-2xl">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/history">My History</Link>
            </li>
            {admin && (
              <li>
                <Link to="/dashboard/users">All Users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
