import React from 'react';

const Logout = (props) => {
  sessionStorage.removeItem('access_token');
  return <h1>You have successfully logged out</h1>
}

export default Logout;