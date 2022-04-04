import React from "react";

export default function Ans() {
  return (
    <div className="quesiotnContainer  mt-5 col-md-12">
      <form action="" className="col-md-12 mx-auto my-auto">
      <div className="subquesitonContainer  ">
        <h3 className="text-dark">Answer From The Community</h3>
        <a className="questionTag" href="">
          Go to Quesiton page
        </a>
        <textarea
          className="quesitonText d-block col-sm-6 col-md-12"
          placeholder="Your Answer..."
          name=""
          id=""
          
          ></textarea>
        {/* <button className="btnCB" type="">
          Show Code Block
        </button> */}
        <button className="btnSub" type="">
          Submit
        </button>
      </div>
          </form>
    </div>
  );
}
