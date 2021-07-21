import React, { Component } from "react";

class PostProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
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
              onChange={this.inputHandler}
            />
          </div>

          <div>
            <input
              type="text"
              name="price"
              value={price}
              onChange={this.inputHandler}
            />
          </div>
          <button type="submit">Submit data</button>
        </form>
      </>
    );
  }
}

export default PostProductForm;
