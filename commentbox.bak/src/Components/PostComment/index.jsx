import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function PostComponent(props) {
  const onSubmit = event => {
    event.preventDefault();
    let comment = event.target.elements.comment.value;
    // console.log(`User 1: ${comment}`);
  };

  const handleThumbsUp = () => {
    console.log("Like");
  };

  const handleThumbsDown = () => {
    console.log("Dislike");
  };

  // sendData = event => {
  //   let comment = event.target.elements.comment.value;
  //   this.props.parentCallback(comment);
  // };

  return (
    <div className="row">
      <div className="col-md-4" />
      <form className="col-md-5 bg-light border rounded" onSubmit={onSubmit}>
        <div className="form-group">
          <h2 className="text-left">Please enter a comment: </h2>
          <textarea
            className="form-control border border-success"
            placeholder="Enter a comment..."
            type="text"
            rows="5"
            id="comment"
          />
          <button
            className="btn btn-success btn-submit rounded-pill"
            type="submit"
          >
            Submit
          </button>
          <small id="emailHelp" className="form-text text-muted">
            Your comments will be posted.
          </small>
          <button className="btn-like">
            <FontAwesomeIcon
              icon={faThumbsUp}
              onClick={handleThumbsUp}
              size="2x"
            />
          </button>
          <button className="btn-dislike">
            <FontAwesomeIcon
              icon={faThumbsDown}
              onClick={handleThumbsDown}
              size="2x"
            />
          </button>
        </div>
      </form>
      <div className="col-md-3 " />
    </div>
  );
}

export default PostComponent;
