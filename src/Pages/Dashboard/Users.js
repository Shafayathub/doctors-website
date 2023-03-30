import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('https://server-doctors-website.onrender.com/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-center">All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>User</th>
              <th>Job</th>
              <th>Removal</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <UserRow
                key={user._id}
                user={user}
                i={i}
                refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
