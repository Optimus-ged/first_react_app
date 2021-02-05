import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const BookList = () => {
  return (
    <section className="book-list">
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src="" alt="place a la toph" />
      <h2>Father's love book</h2>
      <p>Optimus ged</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
