// Importing modules and dependancies
import Reat from "react";
import ReactDom from "react-dom";
import './index.css';
import bitcoin from './images/bitcoin.png';

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <section className="nav-bar">
        <ul>
          <li>
            <a href="www.google.com">Home</a>
          </li>
          <li>
            <a href="www.google.com">Users</a>
          </li>
          <li>
            <a href="www.google.com">Clients</a>
          </li>
          <li>
            <a href="www.google.com">Settings</a>
          </li>
          <li>
            <a href="www.google.com">About</a>
          </li>
        </ul>
        <p className="optimus">OptimusTec</p>
      </section>
      <section className="banner">
        <div className="app-text">
          <h1>Optimus code for bitcoin witch is the better than Gold</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            sequi dignissimos delectus similique animi quam illum impedit,
            nesciunt officia. Similique at est alias dicta dolorum, sit harum
            sequi praesentium quisquam?
          </p>
        </div>
        <div className="app-toph">
          <img src={bitcoin} alt="bitcoin toph"/>
        </div>
      </section>
    </article>
  );
};

// Exporting modules
ReactDom.render(<Wrapper />, document.getElementById("root"));
