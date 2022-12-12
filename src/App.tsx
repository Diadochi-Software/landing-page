import React from 'react';
import './App.css';
import Navbar from "./nav/Navbar";
import Banner from "./banner/Banner";
import Services from "./services/Services";
import Footer from "./footer/Footer";

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
            <div className={"footer-container container"}>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
