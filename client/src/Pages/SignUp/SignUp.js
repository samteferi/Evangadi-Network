import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/users", form);
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);

      navigate("/");
    } catch (error) {
      console.log("problem ==>", error.response.data.msg);
    }
  };
  return (
    <div className="containe mainn">
        <div className="wana container ">
          <p className="p11">Join the network</p>
          <p className="p22">
            Already have an account?
            <Link to="" className="a11">
              Sign in
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="in11 in11i"
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />

            <div className="FLname">
              <input
                className="in11 in11F"
                name="firstName"
                onChange={handleChange}
                type="text"
                placeholder="First Name"
              />

              <input
                className="in11 in11L"
                name="lastName"
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="in11 in11i"
              name="userName"
              onChange={handleChange}
              type="text"
              placeholder="User Name"
            />

            <input
              className="in11 in11i"
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </form>
          <p className="p33">
            I agree to the
            <Link to="" className="a22">
              privacy policy
            </Link>
            and
            <Link to="" className="a22">
              terms of serivice.
            </Link>
          </p>
          <button className="btnSign">Agree and Join</button>

          <Link to="" className="a33">
            Already have an account?
          </Link>
        </div>
      
    
     

    </div>
  );
};

export default SignUp;
