import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    if (username.trim()) {
      history.push(`/documentation/${username}`);
    } else {
      alert("Please enter a username");
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Username"
        value={username}
        onChange={handleChange}
      />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
