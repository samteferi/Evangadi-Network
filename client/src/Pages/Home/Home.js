import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Questions from '../../Components/QuesitonsP/Questions';
import Que from '../../Components/Question/Que';
import { UserContext } from '../../context/UserContext';
import "./Home.css";

const Home = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);
    return (
            <div className="container my-5 home-container">
                <div className="d-flex justify-content-around">
                    <button className="ask_button">Ask Question</button>
                    <h4>Welcome: {userData.user?.display_name}</h4>
                </div>
                <div>
                    {/* <Questions/> */}
                </div>
            </div>
    )
}

export default Home