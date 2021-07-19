import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentsChangeHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  topicChangeHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandler = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    const {
      usernameChangeHandler,
      commentsChangeHandler,
      topicChangeHandler,
      submitHandler,
    } = this;

    return (
      <>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="">User name</label>
            <input
              type="text"
              value={username}
              onChange={usernameChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="">Comments</label>
            <textarea
              value={comments}
              onChange={commentsChangeHandler}
            ></textarea>
          </div>
          <div>
            <select value={topic} onChange={topicChangeHandler}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit Changes</button>
        </form>
      </>
    );
  }
}

export default Form;
