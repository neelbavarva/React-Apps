import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0 ,
        tags : ["tag1" , "tag2" , "tag3"]
    };

    handleIncrement = () => {
        this.setState({count : this.state.count + 1})
    };
    render() {
        let classes ="badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return (
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn m-2 btn-secondary">Increment</button>
            </div>
            
        );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter ;