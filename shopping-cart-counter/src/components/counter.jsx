import React, { Component } from 'react';

class Counter extends Component {
    
    render() {
        let classes ="badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return (
            <div className="row">
                <div className="col-1">
                <span className={classes}>{this.formatCount()}</span>
                </div>
                <div className="col">
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn m-2 btn-secondary">+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn m-2 btn-secondary"
                disabled={this.props.counter.value===0 ? "disabled" : ""}
                >-</button>
                <button onClick={() => this.props.onDelete (this.props.counter.id)} className="btn m-2 btn-danger">×</button>
                </div>
                
            </div>
            
        );
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter ;
