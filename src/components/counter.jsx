import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }
    rederTags(){
        if (this.state.tags.length === 0)  return "there is no tag.";
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncreament = () => {
        
        this.setState({ count: this.state.count+1})
    };
    render() { 
        console.log('props', this.props.value);

        return (  
            <React.Fragment>
                <span style={this.styles}className={this.getBadgeClasses()} >{this.formatCount()}</span>
                <button onClick={this.handleIncreament} className='btn btn-secondary btn-sm'>increament</button>
                {/* <div>{this.rederTags()}</div> */}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count ;
    }
}
 
export default Counter;