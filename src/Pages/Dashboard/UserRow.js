import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, i, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://server-doctors-website.onrender.com/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success('Successfully made an admin');
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{email}</td>
      <td>
        {role !== 'admin' && (
          <button onClick={makeAdmin} className="btn btn-xs">
            make admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error">Remove</button>
      </td>
    </tr>
  );
};

export default UserRow;
