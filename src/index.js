import React from 'react';
import ReactDom from 'react-dom';

// Styles
import './to_delete/to_delete.css';

const Wrapper = ()=>{
  return (
    <article className="wrapper">
      <h2>Handling Dropviews with Css code</h2>
      <div className="dropview">
        <p>See the dropview</p>
        <div className="dropview-content">
          <p>File Editing</p>
          <br />
          <p>Project settings</p>
          <br />
          <p>Help</p>
          <br />
          <p>Exit app</p>
        </div>
      </div>
    </article>
  );
};

ReactDom.render(<Wrapper/>, document.getElementById('root'));