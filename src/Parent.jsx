import React, { useContext } from "react";

const ValContext = React.createContext(10);

function Level3() {
    const val = useContext(ValContext);
    return (<div>
        <h1>Level 3, value is {val}</h1>
    </div>);
}

function Level2() {
    return (<div>
        <h1>Level 2</h1>
        <Level3 />
    </div>);
}

function Level1() {
    return (<div>
        <h1>Level 1</h1>
        <Level2 />
    </div>);
}

function Parent() {
    const val = 100000;

    return (<div>
        <h1>Parent</h1>
        <ValContext.Provider value={val}>
            <Level1 />
        </ValContext.Provider>
    </div>);
}

export default Parent;


/*
App
    Parent
        Child1
            Child 2
                Child 3
    Header
    Footer

    App
        MainApp
            Login
        Header
*/