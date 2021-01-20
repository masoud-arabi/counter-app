import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
    

    render() { 
        const { onIncrement, onDelete, onReset, counters} = this.props;
        return (
        <div>
            <button onClick={onReset} className="btn btn-primary">reset</button>
            {counters.map(counter =>
                //  <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>  
                 <Counter 
                 key={counter.id} 
                 onDelete={onDelete}
                 onIncrement={onIncrement}
                 counter={counter} >  
                 {/* <h4>Counter #{counter.id}</h4> */}
                 </Counter>)
                 }
            
        </div> );
    }
}
 
export default Counters;