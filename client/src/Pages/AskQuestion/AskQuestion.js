import React from "react";
import "./AskQuestion.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AskQuestion() {
  
  return (   
    <div className="container my-5">
      <div className="d-flex flex-column align-items-center my-5">
        <h3>Steps to write a good question</h3>
        <ul className="question_steps">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form className="d-flex flex-column p-5 question_form  justify-content-between">
        <h3 className="">Ask a public question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>
        <input className="question_title" type="text" name="" Placeholder="Title"/>
        <textarea
          className="question_input"
          placeholder="Question Description..."
          name=""
          id=""
        ></textarea>
        <button className="question_post_btn" type="">
          Post Your Question
        </button>
      </form>
    </div>
  );
}
