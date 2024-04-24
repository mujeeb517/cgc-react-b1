// function
// returns UI or 
// null
// Top level components
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    return (<div className="flex flex-col h-screen justify-between">
        <Header />
        <Footer />
    </div>);
};

export default App;
