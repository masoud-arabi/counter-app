import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
    state = { 
        counters: [ {id: 1, value:5},
                    {id: 2, value:3},
                    {id: 3, value:0},
                    {id: 4, value:0}
                ]
     };

     handleDelete = (counterId) => {
        //  console.log('delete handler', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        // this.setState({ counters: counters});
        this.setState({ counters });
     };
     
    handleReset = () => {
        const counters = this.state.counters.map(c =>{
            c.value = 0;
            return c;
        } );
        this.setState({counters});
    };

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        console.log(this.state.counters[index]);
        this.setState({counters});
        console.log(this.state.counters[index]);
    };

    render() { 
        return (
        <div>
            <button onClick={this.handleReset} className="btn btn-primary">reset</button>
            {this.state.counters.map(counter =>
                //  <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id}>  
                 <Counter 
                 key={counter.id} 
                 onDelete={this.handleDelete}
                 onReset={this.handleReset}
                 onIncrement={this.handleIncrement}
                 counter={counter} >  
                 {/* <h4>Counter #{counter.id}</h4> */}
                 </Counter>)
                 }
            
        </div> );
    }
}
 
export default Counters;