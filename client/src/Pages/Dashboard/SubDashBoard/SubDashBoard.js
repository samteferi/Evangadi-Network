import React from 'react'
import "./SubDashBoard.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from 'react-router-dom';
const SubDashBoard = () => {
  return (
    <div className="SubDashBoard">
      <div className="onBoardflow">
        <div className="onboardAnswerlink">
          Answer: <span className="countAnswer">0</span>
        </div>
        <div className="onBoardQnDescription">
          This is Evangadi nextwork Q & A dashboard.
          <div className="subjectList ">
            <ul>
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>JavaScript</p>
              </li>
              <li>
                <p>Bootstrap</p>
              </li>
              <li>
                <p>jQuery</p>
              </li>
              <li>
                <p>React</p>
              </li>
              <li>
                <p>DataBase</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="ChevronRight ">
          <Link to="###">
            Click To Answer
            <ChevronRightIcon className="xxx" fontSize="large" />
          </Link>
        </div>
      </div>

      <div className="viewAnswerLink">
        <Link to="###">
          view answer
          <ChevronRightIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}

export default SubDashBoard;