import React from "react";

export default function Ans() {
  return (
    <div className="quesiotnContainer">
      <div className="subquesitonContainer">
        <h3 className="text-dark">Answer From The Community</h3>
        <a className="questionTag" href="">
          Go to Quesiton page
        </a>
        <textarea
          className="quesitonText d-block"
          placeholder="Your Answer..."
          name=""
          id=""
        
        ></textarea>
        <button className="btnCB" type="">
          Show Code Block
        </button>
        <button className="btnSub" type="">
          Submit
        </button>
      </div>
    </div>
  );
}
