// Importing dependancies and modules
import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="dash-board">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi hic
          velit deserunt incidunt obcaecati atque nostrum fuga suscipit libero
          facilis! Eligendi odit cumque architecto eos optio consequatur maxime
          unde voluptatum?
        </p>
      </div>
      <div className="content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis,
          voluptas natus! Fugiat, tempora ullam quisquam numquam, ipsam porro
          corrupti quod dolor reprehenderit quasi nihil praesentium inventore,
          corporis laborum debitis quidem!
        </p>
      </div>
    </article>
  );
};

// Exporting
ReactDom.render(<Wrapper />, document.getElementById("root"));
