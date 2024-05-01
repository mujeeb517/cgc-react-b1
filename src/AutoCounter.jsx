import React from 'react';

// Routing
// Moment
// willUnMount
class AutoCounter extends React.Component {

    state = { count: 0 };

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
            console.log('Updating');
        }, 1000);
    }

    // clean up
    componentWillUnmount() {
        console.log('unmounted');
        clearInterval(this.timer);
    }

    render() {
        return <div>
            <h1 className="text-xl font-semibold">Count {this.state.count}</h1>
        </div>
    }
}

export default AutoCounter;