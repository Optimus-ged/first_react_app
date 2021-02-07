import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book
        title="This book is talking about father's love"
        author="Optimus ged"
      />
      <Book
        title="This book is talking about father's love"
        author="Cr3sc3nd0 Optimus"
      />
      <Book
        title="This book is talking about father's love"
        author="John Yala"
      />
      <Book
        title="This book is talking about father's love"
        author="Sisi Sifa"
      />
      <Book
        title="This book is talking about father's love"
        author="Nzolani Salem"
      />
      <Book
        title="This book is talking about father's love"
        author="Adele Bash"
      />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <img src="" alt="" />
      <h2>{props.title}</h2>
      <p>{props.author}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
