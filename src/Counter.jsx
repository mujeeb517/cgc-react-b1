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
import { useState } from 'react';

// hooks
// class Counter extends React.Component {

//     // initialization
//     state = {
//         count: 10
//     };

//     onInc = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//     onDec = () => {
//         this.setState({
//             count: this.state.count - 1
//         });
//     }

//     render() {
//         return <div>
//             <h1>Count : {this.state.count}</h1>
//             <button className="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={this.onInc}>++</button>
//             <button className="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={this.onDec}>--</button>
//         </div>;
//     }
// }

function Counter() {

    const [count, setCount] = useState(0);

    const onInc = () => {
        setCount(count + 1);
    }

    const onDec = () => {
        setCount(count - 1);
    }

    return <div>
        <h1>Count : {count}</h1>
        <button className="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={onInc}>++</button>
        <button className="bg-orange-500 px-2 py-1 m-1 text-white hover:bg-orange-600 rounded" onClick={onDec}>--</button>
    </div>;
}

export default Counter;