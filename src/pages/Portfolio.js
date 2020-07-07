import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/PortfolioProjects";
import Footer from "../components/Footer";

export default function Portfolio(){
    return (
        <div>
            <Navbar/>
                <Portfolio/>
            <Footer/>
        </div>
    )
}

