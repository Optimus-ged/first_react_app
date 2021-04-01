// Importing dependancies
import React from "react";
import ReactDom from "react-dom";
import "./test.css";

// Building components
const Wrapper = () => {
  return (
    <article className="wrapper">
      <div className="header">
        <div className="header-content">
          <p className="title">Optimus Tec</p>
          <ul>
            <li>Home</li>
            <li>Users</li>
            <li>Clients</li>
            <li>About</li>
            <li>Exit</li>
          </ul>
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <h1>XAMPP Apache + MariaDB + PHP + Perl</h1>
        </div>
      </div>
      <div className="banner-2">
        <div className="container-2">
          <p className="title-1">Welcome to XAMPP for Windows 8.0.0</p>
          <p>
            You have successfully installed XAMPP on this system! Now you can
            start using Apache, MariaDB, PHP and other components. You can find
            more info in the <a className="important">FAQs</a> section or check
            the <a className="important">HOW-TO Guides </a> for getting started
            with PHP applications. <br />
            <br /> XAMPP is meant only for development purposes. It has certain
            configuration settings that make it easy to develop locally but that
            are insecure if you want to have your installation accessible to
            others. If you want have your XAMPP accessible from the internet,
            make sure you understand the implications and you checked the
            <a className="important"> FAQs </a>
            to learn how to protect your site. Alternatively you can use
            <a className="important"> WAMP </a>,
            <a className="important"> MAMP </a>
            or <a className="important"> LAMP </a> which are similar packages
            which are more suitable for production. <br />
            <br />
            Start the XAMPP Control Panel to check the server status. <br />
            <br />
          </p>
          <p className="title-1">Community</p>
          <p>
            XAMPP has been around for more than 10 years – there is a huge
            community behind it. You can get involved by joining our Forums,
            adding yourself to the Mailing List, and liking us on Facebook,
            following our exploits on Twitter, or adding us to your Google+
            circles.
          </p>
          <br />
          <p className="title-2">
            Contribute to XAMPP translation at translate.apachefriends.org.
          </p>
          <p>
            Can you help translate XAMPP for other community members? We need
            your help to translate XAMPP into different languages. We have set
            up a site, translate.apachefriends.org, where users can contribute
            translations.
          </p>
          <br />
          <p className="title-2">Install applications on XAMPP using Bitnami</p>
          <p>
            Apache Friends and Bitnami are cooperating to make dozens of open
            source applications available on XAMPP, for free. Bitnami-packaged
            applications include Wordpress, Drupal, Joomla! and dozens of others
            and can be deployed with one-click installers. Visit the Bitnami
            XAMPP page for details on the currently available apps.
          </p>
        </div>
      </div>
    </article>
  );
};

// Exporting dependancies
ReactDom.render(<Wrapper />, document.getElementById("root"));
