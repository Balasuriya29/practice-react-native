// import logo from "./logo.svg";
import "./App.css";
import React, { useState, Component } from 'react';

//NavBar - Functional Components
function GetNavBar() {  
  //creating react element by using createElement
  const heading = React.createElement(
    'h1',
    {className:"heading"},
    "My First App in React"
  );

  return (
    <div className="navBar">
      {heading}
    </div>
  );
}

//Content - Functional Components
function GetBodyContent(props) {
  return (
    <div className="content">
      {props.user.name} pressed this button 
      <br></br>
      {props.user.noOfTimes}
    </div>
  );
}

//Footer - Functional Components
function GetFooter(props) {
  return (
    <div className="footer">
      <div className="floatingButton" onClick={props.func}>
        <i className="fa fa-plus" id="plusIcon"></i>
      </div>
    </div>
  );
}

// App That we are going to export
// Here App is Functional Component
function App(props) {

  //creating variables using useState 
  let [noOfTimes , setTimes] = useState(0);
  let [isValidInput, setToggle] = useState(true);

  let people = ["Adi", "Bala", "Chris", "David", "Evans"];
  const person ={
    name: people[noOfTimes%people.length],
    noOfTimes: noOfTimes,
    buttonPressed(e, times){
      //Conditional Rendering component by changing the state
      if(!times) setToggle(false);
      else setToggle(true);
      
      //Updating the value by useState variable
      setTimes(noOfTimes+Number(times));

    }
  };

  return (
    <div className="body">
        <GetNavBar/>
        <GetBodyContent user={person} />
        <input id="count" type={"number"}></input>
        {(isValidInput)?null:<p>Enter a Valid Input</p>}
        <GetFooter func={(e) => person.buttonPressed(e, (document.getElementById('count'))?document.getElementById("count").value:1)}/>
    </div>
  );
}
export default App;

// Here App is Class Component
// let people = ["Adi", "Bala", "Chris", "David", "Evans"];
// let times = 0;
// const person ={
//   name: people[times%people.length],
//   noOfTimes: times,
// };

// class App extends Component {
  
//   constructor(props){
//     super();
//     this.state = person;
//   }

//   buttonPressed = () => {
//     this.setState({
//       name: people[(++times)%people.length],
//       noOfTimes : times,
//     });
//   }

  
//   render() { 
//     return (
//       <div className="body">
//           <GetNavBar/>
//           <GetBodyContent user={this.state} />
//           <div className="footer">
//             <div className="floatingButton" onClick={this.buttonPressed}>
//               <i className="fa fa-plus" id="plusIcon"></i>
//             </div>
//           </div>
//       </div>
//     );
//   }
// }

// export default App;
