import React from "react";

import "./Quesitons.css";
function Questions() {
  return (
    <div className="qContainer">
      <div className="secondContainer">
      <div className="qContainer_av">
        <div>
          <button className="ansview" href="">
            Answers:0
          </button>
        </div>
      </div>
      <div className="mainOne">
        <div className="title">
          <h3>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia provident perspiciatis repellat tempore iste voluptas minima, modi facere, delectus, obcaecati deleniti. Ducimus cum dolores voluptatum, commodi a quidem nemo.
          </h3>
        </div>
        <div className="items">
            <div className="pin">HTML</div>
            <div  className="pin">CSS</div>
            <div  className="pin">javascript</div>
            <div  className="pin">Bootstrap</div>
            <div  className="pin">jquery</div>
            <div className="pin">React</div>
            <div className="pin">database</div>
        </div>
        <div className="forAnswer">
         <button className="Canswer ansview">Click to Answer</button>
       </div>
      </div>
      </div>
      <div className="time">
        <p>Time of post will be here:</p>
      </div>
    </div>
  );
}
export default Questions;
