// function
// returns UI or 
// null
// Top level components
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MainApp from './MainApp';

const App = () => {
    return (<div className="flex flex-col h-screen justify-between">
        <Header />
        <MainApp />
        {/* <Footer /> */}
    </div>);
};

export default App;
