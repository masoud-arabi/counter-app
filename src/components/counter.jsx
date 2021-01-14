import React, { Component } from 'react';

class Counter extends Component {
   

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }
    rederTags(){
        if (this.state.tags.length === 0)  return "there is no tag.";
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render() { 
        // console.log('props', this.props);

        return ( 
            <React.Fragment>
                <h4>Counter #{this.props.counter.id}</h4>
                {this.props.children}
                <span style={this.styles}className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={()=> this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>increament</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-am m-2">Delete</button>
                {/* <div>{this.rederTags()}</div> */}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value ;
    }
}
 
export default Counter;