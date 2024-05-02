// function
// returns UI or 
// null
// Top level components
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainApp from './MainApp';

const App = () => {
    return (<div className="flex flex-col h-screen justify-between">
        <BrowserRouter>
            <Header />
            <MainApp />
             <Footer />
        </BrowserRouter>
    </div>);
};

export default App;
