import React from 'react';
import './App.css';
import Navbar from "./nav/Navbar";
import Banner from "./banner/Banner";

function App() {
    return (
        <div>
            <div className={"header-container"}>
                <Navbar/>
            </div>
            <Banner/>
        </div>
    );
}

export default App;
