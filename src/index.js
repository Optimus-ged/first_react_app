import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src="../assets/images/love-you.PNG" alt="father's love book" />
      <h2>This is a book about father's love</h2>
      <p>Optimus ged</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
