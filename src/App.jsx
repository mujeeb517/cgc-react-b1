// function
// returns UI or 
// null
// Top level components
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainApp from './MainApp';
import UserContext from './context/UserContext';

const App = () => {

    const [isLoggedin, setLoggedin] = useState(false);

    return (<div className="flex flex-col h-screen justify-between">
        <BrowserRouter>
            <UserContext.Provider value={{ isLoggedin, setLoggedin }}>
                <Header />
                <MainApp />
                <Footer />
            </UserContext.Provider>
        </BrowserRouter>
    </div >);
};

export default App;
