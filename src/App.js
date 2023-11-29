import React from "react";
// import react router dom
import { Routes, Route, HashRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import LettiesNursery from "./Pages/LettiesNursery";
import Figurative from "./Pages/Figurative";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/letties-nursery" element={<LettiesNursery />} />
                <Route path="/figurative" element={<Figurative />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
