import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navBar';

class App extends Component {
  state = { 
    counters : [
        {id: 1,count :4},
        {id: 2,count :0},
        {id: 3,count :0},
        {id: 4,count :0},
      ]
  } 
  render() { 
    return (
      <React.Fragment>
        <NavBar 
          noOfCounters={this.state.counters.length}
        />
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }


  handleIncrement = (id) => {
    let newCounters = this.state.counters.filter(
        counter => {
            if(counter.id === id) counter.count++;
            return counter
        }
    )

    this.setState(newCounters);
  }

  handleDecrement = (id) => {
      let counters = this.state.counters.filter(
          counter => {
              if(counter.id === id) counter.count--;
              return counter
          }
      )

      this.setState({counters});
  }

  handleReset = () => {
      let counters = this.state.counters.filter(
          counter => {
              counter.count = 0; 
              return counter;
          }
      )
      
      this.setState({counters});
  }

  handleDelete = id => {
      let counters = this.state.counters.filter(
          counter => (counter.id !== id)
      )
      
      this.setState({counters});
  }
}
 
export default App;