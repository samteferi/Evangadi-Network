import React from 'react'
import "./QuestionsNew.css";
import profile from "../../Images/Male User.png"

const QuestionsNew = ({question}) => {
    return (
        <div className="d-md-flex align-items-center justify-space-between">
            <div className="d-flex flex-md-column">
                <img className="avatar" src={profile}alt="Avatar" />
                <h6 className="align-self-center ms-2 ms-md-0">USER NAME</h6>
            </div>
            <div className="ms-md-5 flex-grow-1">
                <h6 className="pt-2 pt-md-0">{question}</h6>
            </div>
            <div className="d-none d-md-block ms-md-5">
                <i class="fa fa-angle-right "></i>
            </div>
        </div>
    )
}

export default QuestionsNew