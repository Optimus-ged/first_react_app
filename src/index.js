import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section>
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
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="../assets/images/love-you.PNG" alt="father's love book" />
);
const Title = () => <h2>This is a book about father's love</h2>;
const Author = () => <p>Optimus ged</p>;

ReactDom.render(<BookList />, document.getElementById("root"));
