import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post('http://localhost:4000/api/users/login',
        {
          email: form.email,
          password: form.password
        });
        console.log(loginRes)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user
      });

      localStorage.setItem('auth-token', loginRes.data.token);
      navigate('/');
    } catch (err) {
      console.log('problem', err);
    }
  }

  useEffect(() => {
    if (userData.user) navigate('/');
  }, [userData.user, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <label>Email: </label>
      <input
        type="text"
        name="email"
        onChange={handleChange}
      /><br />
      <label>Password: </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
      /><br />
      <button>submit</button>
    </form>
  )
}

export default Login