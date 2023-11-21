import React from "react";
// import react router dom
import { Routes, Route, HashRouter } from "react-router-dom";
// import pages
import Home from "./Pages/Home";
// import components
import Footer from "./Components/Footer";

const App = () => {
    return (
        <Hashrouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Hashrouter>
    );
};

export default App;
