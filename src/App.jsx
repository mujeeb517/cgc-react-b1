// function
// returns UI or 
// null
// Top level components

import React from 'react';
import Counter from './Counter';
import Name from './Name';
import ProductList from './ProductList';
import Skills from './Skills';

const App = () => {
    return (<div>
        {/* <Skills /> */}
        <Counter />
        <ProductList />
        {/* <Name value="John" />
        <Name value="Joseph" />
        <Name value="Abc" />
        <div>
            <h1>Heading2</h1>
            <div>
                <h3>Heading 3</h3>
            </div>
        </div>
        <h1>Hello World</h1>
        <img src="https://images.pexels.com/photos/18873395/pexels-photo-18873395/free-photo-of-tea-coffee-and-a-vase-with-blooming-flowers-on-a-table-standing-by-a-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="200" height="200" /> */}
    </div>);
};

export default App;
