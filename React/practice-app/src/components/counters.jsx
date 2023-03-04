import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-primary m-4" onClick={this.props.onReset}><h3>Reset</h3></button>
                {
                this.props.counters.map( 
                    counter => <Counter 
                        key={counter.id} 
                        counter={counter}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                        />
                    )
                }
            </React.Fragment>
        );
    }

}
 
export default Counters;