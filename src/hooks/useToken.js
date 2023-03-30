import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    // console.log('opions I can put into data of user', user);
    const email = user?.user?.email;
    // const name = user?.user?.displayName;
    const currentUser = {
      email,
    };
    if (email) {
      fetch(`https://server-doctors-website.onrender.com/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('data inside custom hook', data);
          const tokenFromServer = data.token;
          localStorage.setItem('accessToken', tokenFromServer);
          setToken(tokenFromServer);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
