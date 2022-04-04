import React from 'react'
import "./QuestionsNew.css";
import profile from "../../Images/Male User.png"

const QuestionsNew = () => {
    return (
        <div className="d-md-flex align-items-center justify-space-between">
            <div className="d-flex flex-md-column">
                <img className="avatar" src={profile}alt="Avatar" />
                <h6 className="align-self-center ms-2 ms-md-0">USER NAME</h6>
            </div>
            <div className="ms-md-5">
                <p className="pt-2 pt-md-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum voluptate eveniet nihil debitis cupiditate iusto illo sit itaque adipisci repellendus corporis inventore aspernatur nisi soluta dolore, vel ipsum optio aperiam!</p>
            </div>
            <div className="d-none d-md-block ms-md-5">
                <i class="fa fa-angle-right "></i>
            </div>
        </div>
    )
}

export default QuestionsNew