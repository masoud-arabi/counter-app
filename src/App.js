import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Counters from './components/counters.jsx';

class App extends Component {
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
  render(){
    return (
      <div>
         <Navbar totalCounters={this.state.counters.filter(c => c.value > 4).length}/>
        <main className="container">
          <Counters 
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </div>
    );
  }
}

export default App;
