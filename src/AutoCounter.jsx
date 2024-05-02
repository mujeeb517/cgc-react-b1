import React, { useEffect } from 'react';
import { useState } from 'react';

// Routing
// Moment
// willUnMount
function AutoCounter() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count + 1);
            console.log('Updating');
        }, 1000);
        // component will unmount
        return () => {
            clearTimeout(timer);
        };
    }, [count]);

    return <div>
        <h1 className="text-xl font-semibold">Count {count}</h1>
    </div>
}

export default AutoCounter;