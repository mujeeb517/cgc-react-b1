// function
// returns UI or 
// null
// Top level components

import React from 'react';
import Name from './Name';

const App = () => {
    return (<div>
        <Name />
        <Name />
        <Name />
        <Name />
        <Name />
        <div>
            <h1>Heading2</h1>
            <div>
                <h3>Heading 3</h3>
            </div>
        </div>
        <h1>Hello World</h1>
        <img src="https://images.pexels.com/photos/18873395/pexels-photo-18873395/free-photo-of-tea-coffee-and-a-vase-with-blooming-flowers-on-a-table-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="200" height="200" />
    </div>);
};

export default App;
