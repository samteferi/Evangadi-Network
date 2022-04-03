import React from 'react'
import { Link } from 'react-router-dom';
import "./DashBoard.css";
import SubDashBoard from './SubDashBoard/SubDashBoard';

const DashBoard = () => {
  return (
    <section className="questionOnBoarding">
      <div className="container">
        <div className="questionOnBoardingWrapper">
          <div className="dashboard col-md-12 col-12 col-lg-12">
            <div className="questionContainer">
              <div className="onBoardTitleQnWrapper left-align">
                <div className=" onBoardWrapper left-align">
                  <div className="onBoardTitleWrapper">
                    <h3 className="onBoardTitle">Top Question</h3>
                  </div>
                  <div className="onBoardAsklink">
                    <Link to="###" > Ask question</Link>
                  </div>
                </div>
                <SubDashBoard />
                <SubDashBoard />
                <SubDashBoard />
                <SubDashBoard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashBoard;