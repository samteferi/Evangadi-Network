import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Que from '../AskQuestion/AskQuestion';
import QuestionsNew from '../../Components/QuestionsNew/QuestionsNew';
import SingleQuestion from '../../Components/SingleQuestion/SingleQuestion';
import { UserContext } from '../../context/UserContext';
import "./Home.css";

const Home = () => {
    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!userData.user) navigate("/login");
    }, [userData.user, navigate]);
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/ask-question");
    }
    return (
        <div className="container my-5 home-container">
            <div className="d-flex mb-5 justify-content-between">
                <button className="ask_button" onClick={handleClick}>Ask Question</button>
                <h4>Welcome: {userData.user?.display_name}</h4>
            </div>
            <h3>Questions</h3>
            <div>
                <hr />
                <QuestionsNew />
                <hr />
                <QuestionsNew />
                <hr />
                <QuestionsNew />
            </div>


            {/* change name to AnswerQuestion and setup new route */}
            {/* <SingleQuestion/> */}
        </div>
    )
}

export default Home