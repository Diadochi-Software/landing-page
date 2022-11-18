import React from 'react';
import './App.css';
import Navbar from "./nav/Navbar";
import Banner from "./banner/Banner";
import Services from "./services/Services";

function App() {
    return (
        <div>
            <div className={"header-container container"}>
                <Navbar/>
            </div>
            <Banner/>
            <div className={"container"}>
                <Services/>
            </div>
        </div>
    );
}

export default App;
