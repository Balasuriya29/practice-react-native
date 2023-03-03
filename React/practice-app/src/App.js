// import logo from "./logo.svg";
import "./App.css";
import React from 'react';

function App(user) {
  let person = user.props;

  const heading = React.createElement(
    'h1',
    {className:"heading"},
    "My First App in React"
  )

  return (
    <div className="body">
        <div className="navBar">
          {heading}
        </div>
        <div className="content">
          {person.name} pressed this button <br>
          </br>
          {person.noOfTimes}
        </div>
        <div className="footer">
          <div className="floatingButton"  onClick={person.buttonPressed}>
            <i class="fa fa-plus" id="plusIcon"></i>
          </div>
        </div>
    </div>
  );
}

export default App;
