import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        return (
            <div>
                <h1 style={{display: 'inline'}}>
                    <span className={this.formatCountClass()}>
                        {this.formatCount()}
                    </span>
                    
                    <button type="button" className="btn btn-secondary m-2" onClick={() => this.props.onIncrement(this.props.counter.id)}>+</button>
                    
                    <button disabled={this.props.counter.count === 0?'disabled':''} type="button" className="btn btn-secondary m-2" onClick={() => this.props.onDecrement(this.props.counter.id)}>-</button>

                    <button type="button" className="btn btn-danger m-4" onClick={() => this.props.onDelete(this.props.counter.id)}><h4>Delete</h4></button>
                </h1>
            </div>
        );
    }

    formatCountClass = () => {
        if(this.props.counter.count === 0) return "badge badge-warning m-4"
        return "badge badge-primary m-4";
    }

    formatCount = () => {
        if(this.props.counter.count === 0) return "Zero"
        return this.props.counter.count;
    }
}


export default Counter;