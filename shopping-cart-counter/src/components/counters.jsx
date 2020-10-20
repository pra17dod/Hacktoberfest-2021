import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        const {onReset,onDelete,onIncrement,onDecrement,counters} = this.props;

        return(
            <div >
                
            <button onClick = {onReset} className="btn m-2 btn-primary">Reset</button>
            {counters.map(counter =><Counter onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} key={counter.id}  counter={counter} /> )}
            </div>
            
        );
    }
}

export default Counters ;