import React from "react";
import pokemon from "./lib/users.json";
import Comment from "./Components/Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import "./Components/PostComment/style.css";
import "./App.css";

class App extends React.Component {
  state = {
    user: pokemon,
    counterLike: 0,
    counterDislike: 0,
    newComment: ""
  };

  onSubmit = event => {
    event.preventDefault();
    let newcomment = event.target.elements.comment.value;
    let Commentsubmit = (
      <Comment
        id={this.state.user[1].id}
        picture={this.state.user[1].img}
        user={this.state.user[1].name}
        comment={newcomment}
        onClick={this.onSubmitReply}
        onClickLike={this.handleThumbsUp}
        onClickDislike={this.handleThumbsDown}
        counterLike={this.state.counterLike}
        counterDislike={this.state.counterDislike}
        removeFriend={this.removeNewComment}
      />
    );
    this.setState({ newComment: Commentsubmit });
  };

  updateComment = () => {
    let { user } = this.state;
    console.log(user.newComment);
    return (
      <div>
        <h1>{this.state.newComment.comment}</h1>
      </div>
    );
  };

  onSubmitReply = event => {
    event.preventDefault();
    let reply = event.target.elements.reply.value;
    console.log(`User 1: ${reply}`);
    this.setState({ reply: reply });
  };

  handleThumbsUp = () => {
    this.setState({ counterLike: this.state.counterLike + 1 });
    console.log("Like");
  };

  handleThumbsDown = () => {
    this.setState({ counterDislike: this.state.counterDislike + 1 });
    console.log("Dislike");
  };

  removeFriend = id => {
    console.log(`This removes friend ${id}`);
    const newUser = this.state.user.filter(friend => friend.id !== id);
    this.setState({ user: newUser });
  };

  removeNewComment = id => {
    const newUser = this.state.user.filter(friend => friend.id !== id);
    this.setState({ newComment: "" });
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="text-center text-white">Testing</h1>
          {/* <PostComponent /> */}
          <div className="row">
            <div className="col-md-3" />
            <form
              className="col-md-6 bg-light border rounded"
              onSubmit={this.onSubmit}
            >
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

                <div />
              </div>
            </form>
            <div className="col-md-3 " />
          </div>
        </div>
        <div className="comment-cont">
          {this.state.newComment}
          {this.state.user.map((user, index) => {
            return (
              <React.Fragment>
                <Comment
                  key={index}
                  id={user.id}
                  picture={user.img}
                  user={user.name}
                  comment={user.comment}
                  onClick={this.onSubmitReply}
                  onClickLike={this.handleThumbsUp}
                  onClickDislike={this.handleThumbsDown}
                  counterLike={this.state.counterLike}
                  counterDislike={this.state.counterDislike}
                  removeFriend={this.removeFriend}
                />
              </React.Fragment>
            );
          })}
        </div>
        <div />
      </div>
    );
  }
}

export default App;
