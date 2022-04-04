import React from "react";
import "./AskQuestion.css";
import { useState } from "react";

export default function AskQuestion() {
  return (

      
      <div className="subquesitonContainer mt-5 col-md-6">
        
        <form action="" className="col-md-12 col-xs-4 mx-auto my-auto">
          <h3 className="text-dark">Ask the community</h3>
          <a className="questionTag d-block" href="">
            Go to Answer page
          </a>
          <input
            type="text"
            name=""
            placeholder="Your Question "
            className="quesitonInput col-md-12 col-sm-6"
          />
          <textarea
            className="quesitonText d-block col-md-12"
            placeholder="Question description"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          {/* <button className="btnCB col-md-6" type="">
            Show Code Block
          </button> */}
          <button className="btnSub  " type="">
            Submit
          </button>
        </form>
      {/* </div> */}
    </div>
  );
}
