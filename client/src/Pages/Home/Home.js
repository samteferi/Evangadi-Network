import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import QuestionsNew from '../../Components/QuestionsNew/QuestionsNew';
import SingleQuestion from '../../Components/SingleQuestion/SingleQuestion';
import { UserContext } from '../../context/UserContext';
import "./Home.css";

const Home = () => {
    const [userData, setUserData] = useContext(UserContext);
    const [allQuestions, setAllQuestions] = useState([]);
    const navigate = useNavigate();
    const Questions = async () => {
        try {
            const questionRes = await axios.get('http://localhost:4000/api/questions');
            setAllQuestions(questionRes.data.data);
        } catch (err) {
            console.log("problem", err);
        }
    }
    useEffect(() => {
        if (!userData.user) navigate("/login");
        Questions();
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
                {allQuestions.map(question =>
                    <div key={question.post_id}>
                        <hr />
                        <QuestionsNew
                            question={question.question}
                            userName={question.user_name}
                        />
                    </div>
                )}
                {/* <hr />
                <QuestionsNew />
                <hr />
                <QuestionsNew /> */}
            </div>


            {/* change name to AnswerQuestion and setup new route */}
            {/* <SingleQuestion/> */}
        </div>
    )
}

export default Home