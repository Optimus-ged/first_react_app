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
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg:
            "An Error occured when trying to display data\nfrom the Server",
        });
      });
  }

  render() {
    const { data, errorMsg } = this.state;
    return (
      <>
        {data.length ? (
          data.map((product) => <h1>{product.designation}</h1>)
        ) : (
          <h1>{errorMsg}</h1>
        )}
      </>
    );
  }
}

export default ProductList;
