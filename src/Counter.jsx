/*
    * function or class
    * UI or null
    * props (input, immutable)
    * events
    * State (internal, mutable)
    * stateful components
    * Tailwind
*/
import React from 'react';

class Counter extends React.Component {

    // initialization
    state = {
        count: 10
    };

    onInc = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    onDec = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return <div>
            <h1>Count : {this.state.count}</h1>
            <button class="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={this.onInc}>++</button>
            <button class="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={this.onDec}>--</button>
        </div>;
    }
}

export default Counter;