import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faThumbsUp,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";

function Comment(props) {
  let { removeFriend } = props;
  console.log(removeFriend);
  return (
    <div className="row">
      <div className="col-md-3" />
      <div className="media bg-light col-md-6 border ">
        <img src={props.picture} className="mr-3" alt="..." height="64" />
        <div className="media-body comments">
          <h5 className="mt-0">{props.user}</h5>
          <p>{props.comment}</p>
          <form>
            <input type="text" id="reply" className="form-control" />
            <button className="btn btn-primary" onClick={props.onClick}>
              Reply
            </button>
          </form>
          <button className="btn btn-like">
            <FontAwesomeIcon
              icon={faThumbsUp}
              onClick={props.onClickLike}
              size="2x"
            />
          </button>
          <p>{props.counterLike}</p>

          <button className="btn dislike btn-dislike">
            <FontAwesomeIcon
              icon={faThumbsDown}
              onClick={props.onClickDislike}
              size="2x"
            />
          </button>
          <p>{props.counterDislike}</p>

          <span className="remove" onClick={() => props.removeFriend(props.id)}>
            <FontAwesomeIcon icon={faTrashAlt} size="xs" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
