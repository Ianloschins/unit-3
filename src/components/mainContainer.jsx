import React from "react";
import { Routes, Route} from "react-router-dom"
import Home from "./Home";
import Red from "./Red";
import Blue from "./Blue";

function MainContainer() {
    return (
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
            </Routes>
        </div>
    )
}

export default MainContainer;