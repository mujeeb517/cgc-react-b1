// function
// UI
// null
// props (input)
import React from 'react';

function Name({ value, age }) {
    // interpolation
    return <div>
        <span>Hello, {value} {age}</span>
    </div>
}

export default Name;
