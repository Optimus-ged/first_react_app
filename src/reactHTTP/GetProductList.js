import React, { Component } from "react";
import axios from "axios";

class GetProductList extends Component {
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
          data: response.data.response,
        });
      })
      .catch((err) => {
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
        <div>
          {data.length ? (
            data.map((prod) => (
              <div key={prod.id}>
                <h3>Designation : {prod.designation}</h3>
                <p>Pu : {prod.pu}</p>
                <p>A propos : {prod.a_propos}</p>
              </div>
            ))
          ) : (
            <h3>{errorMsg}</h3>
          )}
        </div>
      </>
    );
  }
}

export default GetProductList;
