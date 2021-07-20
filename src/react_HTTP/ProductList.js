import React, { Component } from "react";
import axios from "axios";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3030/api/article")
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ errorMsg: "Error retrie" });
      });
  }

  render() {
    return <div>Produt list</div>;
  }
}

export default ProductList;
