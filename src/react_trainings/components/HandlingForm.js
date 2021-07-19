import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  usernameChangeHandle = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentChangeHandle = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  topicChangeHandle = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  submitHandle = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandle}>
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameChangeHandle}
            />
          </div>
          <div>
            <textarea
              value={this.state.comments}
              onChange={this.commentChangeHandle}
            ></textarea>
          </div>
          <div>
            <select value={this.state.topic} onChange={this.topicChangeHandle}>
              <option value="React">React</option>
              <option value="Vue">Vue</option>
              <option value="Angular">Angular</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default Form;
