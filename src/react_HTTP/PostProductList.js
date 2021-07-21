import React, { Component } from "react";
import axios from "axios";

class PostProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
    };
  }

  onchangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/api/article", this.state)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  render() {
    const { name, price } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onchangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              value={price}
              onChange={this.onchangeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default PostProductList;
