import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

const SignUp = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const [userData, setUserData] = useContext(UserContext);
    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/users', form);
            const loginRes = await axios.post('http://localhost:4000/api/users/login', {
                email: form.email,
                password: form.password
            });

            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user
            });

            localStorage.setItem('auth-token', loginRes.data.token);
            
            navigate("/");
        } catch (error) {
            console.log('problem ==>',error.response.data.msg);
        }
    }
    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                /><br />
                <label>Last Name: </label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                /><br />
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
        </div>
    );
};

export default SignUp;
