import React from 'react';
import { Link } from 'react-router-dom';
import "./AnswerQuestion.css"

const AnswerQuestion = () => {
  return (
    <div className="container my-5">
      <form className="d-flex flex-column p-5 answer_form  justify-content-between">
        <h3 className="">Answer The Top Question</h3>
        <Link to="/" className="text-decoration-none text-reset cursor-pointer">
          Go to Question page
        </Link>
        <textarea
          className="answer_input"
          placeholder="Your Answer..."
          name=""
          id=""
        ></textarea>
        <button className="answer_post_btn" type="">
          Post Your Answer
        </button>
      </form>
    </div>
  )
}

export default AnswerQuestion