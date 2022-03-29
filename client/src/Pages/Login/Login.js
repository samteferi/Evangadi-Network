import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import './Login.css'

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(loginRes);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.log("problem", err);
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <div className="main">
       <p className="p1">Login to your account</p>
       <p className="p2">
   Don't have an account?<Link to='' className="a1">Create a new account</Link>
  </p>
      <form onSubmit={handleSubmit}>
        <input className="in1" type="email" name="email" onChange={handleChange} placeholder="Your Email" />
        <input className="in1"type="password" name="password" onChange={handleChange} placeholder="Your Password" />
        <button className="btn1">submit</button>
      </form>
        <Link to='/signup' className="a3">
            Create an account?
        </Link>
    </div>
  );
};

export default Login;
