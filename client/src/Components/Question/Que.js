import React from "react";
import "./Que.css";
import { useState } from "react";

export default function Que() {
  
  return (
   
       <div className="quesiotnContainer">
         <div className="subquesitonContainer">
         <h3 className="text-dark">Ask the community</h3>
         <a className="questionTag" href="">Go to Answer page</a>
        <input type="text" name="" placeholder="Question" className="quesitonInput d-block"/>
        <textarea  className="quesitonText d-block" placeholder="Question description" name="" id="" cols="30" rows="10"></textarea>
        <button className="btnCB" type="">Show Code Block</button>
        <button className="btnSub" type="">Submit</button>
         </div>
       </div>




  );
}
